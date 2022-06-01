import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_TRUCK } from "../utils/queries";
import { Heading, Link } from "@chakra-ui/react";
import Reviews from "../components/Reviews";
import ReviewsDb from "../components/ReviewsDb";
import ReviewForm from "../components/ReviewForm";
import Auth from "../utils/auth";
import austinData from "../components/data";

const TruckReviews = () => {
  const { id: truckId } = useParams();

  const truck = austinData.filter((truck) => truck.id === truckId);
  const { loading, data } = useQuery(QUERY_TRUCK, {
    variables: { id: truckId },
  });

  const truckDb = data?.truck || {};

  if (loading) {
    return <div>Now Loading...</div>;
  }

  return (
    <div>
      {truck[0] ? (
        <>
          {truck.map(({ name, id }) => (
            <div>
              <Link
                marginTop={4}
                marginLeft={4}
                wordBreak="break-word"
                href={`/truck/${id}`}
              >
                Back to Truck Details
              </Link>
              <Heading
                textAlign={"center"}
                marginTop={"10"}
                marginBottom={"15"}
              >
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
      ) : (
        <div>
          <Link
            marginTop={4}
            marginLeft={4}
            wordBreak="break-word"
            href={`/truck/${truckDb._id}`}
          >
            Back to Truck Details
          </Link>
          <Heading textAlign={"center"} marginTop={"10"} marginBottom={"15"}>
            Reviews for {truckDb.truckName}
          </Heading>
          {Auth.loggedIn() ? (
            <>
              <ReviewForm />
            </>
          ) : (
            <></>
          )}

          {/* <ReviewsEx /> */}
          <ReviewsDb reviews={truckDb.reviews} />
        </div>
      )}
    </div>
  );
};

export default TruckReviews;
