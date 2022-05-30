import React from "react";
import { Heading, Link } from "@chakra-ui/react";
// import Reviews from "../components/Reviews";
import ReviewForm from "../components/ReviewForm";

const TruckReviews = () => {
  const truck = [{ name: "Popcornolopois" }];

  return (
    <div>
      <Link marginTop={2} wordBreak="break-word" href="/truck">
        Back to Truck Details
      </Link>
      <Heading textAlign={"center"} marginTop={"10"} marginBottom={"15"}>
        Reviews for {truck[0].name}
      </Heading>

      <ReviewForm />

      {/* <Reviews /> */}
    </div>
  );
};

export default TruckReviews;
