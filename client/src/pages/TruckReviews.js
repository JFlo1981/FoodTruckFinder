import React from "react";
import { Heading } from "@chakra-ui/react";
import Reviews from "../components/Reviews";

const TruckReviews = () => {
  return (
    <div>
      <Heading textAlign={"center"} marginTop={"10"} marginBottom={"15"}>
        Reviews for "xys" Truck
      </Heading>

      <Reviews />
    </div>
  );
};

export default TruckReviews;
