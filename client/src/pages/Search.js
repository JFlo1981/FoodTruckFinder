import React from "react";
import { Heading, Image, Stack, useColorModeValue } from "@chakra-ui/react";
import ResultCards from "../components/ResultsCards";

function Search() {
  return (
    <div>
      <Image
        alt={"Login Image"}
        className={"map"}
        objectFit={"cover"}
        src={
          "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662"
        }
      />

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
