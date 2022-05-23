import React from "react";
import { Box, Image, Flex, Button, Link } from "@chakra-ui/react";

export default function resultCards() {
  const property = {
    imageUrl:
      "https://images.unsplash.com/photo-1620589125156-fd5028c5e05b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1787",
    imageAlt: "Rear view of modern home with pool",
    title: "Fish & Chips",
    hours: "9am-5pm",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box maxW="sm" borderWidth="1px" rounded="lg" shadow="lg">
        <Image
          src={property.imageUrl}
          alt={property.imageAlt}
          roundedTop="lg"
        />

        <Flex alignItems="center" justifyContent="space-around">
          <Box p="6">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {property.title}
            </Box>

            <Box>{property.hours}</Box>
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
            <Link href={"#"}>View Truck</Link>
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}
