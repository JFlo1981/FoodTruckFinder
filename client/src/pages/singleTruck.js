import React from "react";
import { useParams } from "react-router-dom";
import { Container, Link } from "@chakra-ui/react";
import austinData from "../components/data";
import TruckInfo from "../components/TruckInfo";
import TruckInfoDb from "../components/TruckInfoDb";

function SingleTruck() {
  const { id: truckId } = useParams();
  const truck = austinData.filter((truck) => truck.id === truckId);

  // console.log(truck);
  return (
    <>
      <div>
        <Container maxW={"7xl"}>
          <Link marginTop={2} wordBreak="break-word" href="/search">
            Back to Map
          </Link>
          {truck[0] ? <TruckInfo /> : <TruckInfoDb />}
        </Container>
      </div>
    </>
  );
}

export default SingleTruck;

// console.log(truck.findIndex(test));

// const reviewLength = truck.reviews.length;
