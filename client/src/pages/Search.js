import React from "react";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from "@chakra-ui/react";
import ResultCards from "../components/ResultsCards";

function Search() {
  return (
    <div>
      <Container maxW={"3xl"} height="70vh">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Map Goes <br />
            <Text as={"span"} color={"green.400"}>
              here
            </Text>
          </Heading>
        </Stack>
      </Container>

      <Stack
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"lg"}
        borderTop={"5px solid #c9c9c9"}
        p={8}
        rounded={"xl"}
        align={"center"}
        pos={"relative"}
      >
        <Heading>Results for "City"</Heading>
        <ResultCards />
        <ResultCards />
        <ResultCards />
      </Stack>
    </div>
  );
}

export default Search;
