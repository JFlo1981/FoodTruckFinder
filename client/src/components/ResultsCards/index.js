import React from "react";

import { Box, Image, Flex, Button, Link, flexbox } from "@chakra-ui/react";
import austinData from "../data";


const resultCards = ({ trucks }) => {
  console.log(austinData)
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      {austinData &&
        austinData.map((truck, index) =>
        index < 5 && 
        (
          <Box
            key={truck.id}
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
          >
            <Image src={truck.image_url} alt={"food truck"} roundedTop="lg" />

            <Flex alignItems="center" justifyContent="space-around">
              <Box p="6">
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {truck.name}
                </Box>

                <Box>Rating: {truck.rating} stars</Box>
              </Box>

              <Button
                rounded={"full"}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"green.400"}
                _hover={{
                  bg: "green.300",
                }}
                marginTop={"5"}
              >
                <Link href={`/truck/${truck.id}`}>View Truck</Link>
              </Button>
            </Flex>
          </Box>
        ))}
    </Flex>
  );
};

export default resultCards;
