import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_TRUCK } from "../utils/queries";
import { Heading, Link } from "@chakra-ui/react";
import Reviews from "../components/Reviews";
import ReviewForm from "../components/ReviewForm";
import Auth from "../utils/auth";
<<<<<<< HEAD
import ReviewsEx from "../components/ReviewsEx";
=======
import austinData from "../components/data";

>>>>>>> 6218094caee9085899d2e90cef43b5b80d345041

const TruckReviews = () => {
  const { id: truckId } = useParams();

  const { loading, data } = useQuery(QUERY_TRUCK, {
    variables: { id: truckId },
  });

  const truck = data?.truck || {};

  if (loading) {
    return <div>Now Loading...</div>;
  }

  return (
    <div>
      <Link marginTop={2} wordBreak="break-word" href={`/truck/${truck._id}`}>
        Back to Truck Details
      </Link>
      <Heading textAlign={"center"} marginTop={"10"} marginBottom={"15"}>
        Reviews for {truck.truckName}
      </Heading>
      {Auth.loggedIn() ? (
        <>
          <ReviewForm />
        </>
      ) : (
        <></>
      )}

      {/* <ReviewsEx /> */}
      <Reviews reviews={truck.reviews} />
    </div>
  );
};

export default TruckReviews;
