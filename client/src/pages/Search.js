import React from "react";
import { Heading, Image, Stack, useColorModeValue, useForceUpdate } from "@chakra-ui/react";
import ResultCards from "../components/ResultsCards";
import App from "../components/Map/index"

function Search() {
  return (
    <div>
     <App  />
      <div className="searchResults">
        <Stack
          // bg={useColorModeValue("white", "gray.800")}

          p={8}
          rounded={"xl"}
          align={"center"}
          pos={"relative"}
        >
          <Heading>Results for "City"</Heading>
          <ResultCards />
        </Stack>
      </div>
    </div>
  );
}

export default Search;

