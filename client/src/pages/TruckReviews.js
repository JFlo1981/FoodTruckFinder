import React from "react";
import { Heading } from "@chakra-ui/react";
import Reviews from "../components/Reviews";
import ReviewForm from "../components/ReviewForm";

const TruckReviews = () => {
  const truck = [{ name: "Popcornolopois" }];

  return (
    <div>
      <Heading textAlign={"center"} marginTop={"10"} marginBottom={"15"}>
        Reviews for {truck[0].name}
      </Heading>

      <ReviewForm />

      {/* <Reviews /> */}
    </div>
  );
};

export default TruckReviews;
