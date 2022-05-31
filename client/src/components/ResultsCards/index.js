import React from "react";

import { Box, Image, Flex, Button, Link } from "@chakra-ui/react";

const resultCards = ({ trucks }) => {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      {trucks &&
        trucks.map((truck) => (
          <Box
            key={truck._id}
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
          >
            <Image src={truck.image} alt={"food truck"} roundedTop="lg" />

            <Flex alignItems="center" justifyContent="space-around">
              <Box p="6">
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {truck.truckName}
                </Box>

                <Box>{truck.hours}</Box>
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
                <Link href={`/truck/${truck._id}`}>View Truck</Link>
              </Button>
            </Flex>
          </Box>
        ))}
    </Flex>
  );
};

export default resultCards;
