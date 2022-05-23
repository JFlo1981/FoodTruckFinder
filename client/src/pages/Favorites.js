import React from "react";
import ResultCards from "../components/ResultsCards";
import { Container, Stack, Heading } from "@chakra-ui/react";

function Favorites() {
  return (
    <div>
      <Heading textAlign={"center"} marginTop={"10"}>
        Username Favorites
      </Heading>

      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        flexFlow="column"
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"row"} spacing={0}>
          <ResultCards />
          <ResultCards />
          <ResultCards />
        </Stack>
      </Container>
    </div>
  );
}

export default Favorites;
