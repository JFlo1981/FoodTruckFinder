import React from "react";
import { Flex, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import ResultCards from "../components/ResultsCards";
import App from "../components/Map";
import { useQuery } from "@apollo/client";
import { QUERY_TRUCKS } from "../utils/queries";
import DbResultCards from "../components/DbResultCards";

function Search() {
  const { loading, data } = useQuery(QUERY_TRUCKS);
  const trucks = data?.trucks || [];

  if (loading) {
    return <div>Now Loading...</div>;
  }
  return (
    <div>
      <App />
      <div className="searchResults">
        <Stack p={8} rounded={"xl"} align={"center"} pos={"relative"}>
          <Heading marginBottom={5}>Truck Results</Heading>
          <Flex w="full" alignItems="center" justifyContent="center">
            <SimpleGrid
              columns={{ base: 1, md: 2, xl: 4 }}
              spacing={"20"}
              mt={5}
              mx={"auto"}
            >
              <DbResultCards trucks={trucks} />
              <ResultCards />
            </SimpleGrid>
          </Flex>
        </Stack>
      </div>
    </div>
  );
}

export default Search;
