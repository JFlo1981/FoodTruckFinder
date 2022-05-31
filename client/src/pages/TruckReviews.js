import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_TRUCK } from "../utils/queries";
import { Heading, Link } from "@chakra-ui/react";
import Reviews from "../components/Reviews";
import ReviewForm from "../components/ReviewForm";
import Auth from "../utils/auth";

const TruckReviews = () => {
  const { id: truckId } = useParams();

  const truck = austinData.filter((truck) => truck.id === truckId);
  const test = truck.map((truck) => truck.reviews.map((text) => text));
  console.log(truck[0].reviews);
  console.log(test);
  return (
    <>
    {truck.map(({ name, reviews, rating, id}) => (
      <div>
      <Link marginTop={2} wordBreak="break-word" href={`/truck/${truck.id}`}>
        Back to Truck Details
      </Link>
      <Heading textAlign={"center"} marginTop={"10"} marginBottom={"15"}>
        Reviews for {name}
      </Heading>
      {Auth.loggedIn() ? (
        <>
          <ReviewForm />
        </>
      ) : (
        <></>
      )}

      <Reviews reviews={truck} truckName={name} />
    </div>
    ))}
  </>
    
  );
};

export default TruckReviews;
