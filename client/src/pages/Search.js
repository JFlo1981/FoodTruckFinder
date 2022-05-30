import React from "react";
import { Heading, Image, Stack, useColorModeValue } from "@chakra-ui/react";
import ResultCards from "../components/ResultsCards";
import App from "../components/Map";
import { useQuery } from "@apollo/client";
import { QUERY_TRUCKS } from "../utils/queries";

function Search() {
  const { loading, data } = useQuery(QUERY_TRUCKS);
  const trucks = data?.trucks || [];

  return (
    <div>
      {/* <App /> */}
      <div className="searchResults">
        <Stack
          // bg={useColorModeValue("white", "gray.800")}

          p={8}
          rounded={"xl"}
          align={"center"}
          pos={"relative"}
        >
          <Heading>FoodTruckFinder Trucks</Heading>
          <ResultCards trucks={trucks} />
        </Stack>
      </div>
    </div>
  );
}

export default Search;
