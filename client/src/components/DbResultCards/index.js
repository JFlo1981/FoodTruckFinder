import React from "react";
import { Box, Image, Button, Link } from "@chakra-ui/react";

const DbResultCards = ({ trucks }) => {
  return (
    <>
      {trucks &&
        trucks.map((truck) => (
          <Box
            key={truck.truckName}
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
          >
            <Image
              src={truck.image}
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
                {truck.truckName}
              </Box>

              <Box>{truck.hours}</Box>

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
                <Link href={`/truck/${truck._id}`}>View Truck</Link>
              </Button>
            </Box>
          </Box>
        ))}
    </>
  );
};

export default DbResultCards;
