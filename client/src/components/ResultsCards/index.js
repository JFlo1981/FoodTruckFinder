import React from "react";
import { Box, Image, Flex, Button, Link, SimpleGrid } from "@chakra-ui/react";
import austinData from "../data";

const resultCards = ({ trucks }) => {
  // console.log(austinData);
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <SimpleGrid
        columns={{ base: 1, md: 2, xl: 4 }}
        spacing={"20"}
        mt={5}
        mx={"auto"}
      >
        {austinData &&
          austinData.map(
            (truck, index) =>
              index < 5 && (
                <Box
                  key={truck.id}
                  maxW="sm"
                  borderWidth="1px"
                  rounded="lg"
                  shadow="lg"
                >
                  <Image
                    src={truck.image_url}
                    alt={"food truck"}
                    roundedTop="lg"
                    height={"200px"}
                    objectFit={"cover"}
                    width={"100%"}
                  />

                  <Box textAlign={"center"}>
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

                    <Button
                      rounded={"full"}
                      fontSize={"sm"}
                      fontWeight={600}
                      color={"white"}
                      bg={"green.400"}
                      _hover={{
                        bg: "green.300",
                      }}
                      marginTop={"2"}
                      marginBottom={"4"}
                      width={"80%"}
                    >
                      <Link href={`/truck/${truck.id}`}>View Truck</Link>
                    </Button>
                  </Box>
                </Box>
              )
          )}
      </SimpleGrid>
    </Flex>
  );
};

export default resultCards;
