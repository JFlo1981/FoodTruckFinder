import React from "react";
import { Box, Badge, Image, Flex } from "@chakra-ui/react";

export default function resultCards() {
  const property = {
    imageUrl:
      "https://images.unsplash.com/photo-1620589125156-fd5028c5e05b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1787",
    imageAlt: "Rear view of modern home with pool",
    title: "Fish & Chips",
    formattedPrice: "9am-5pm",
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

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge rounded="full" px="2" colorScheme="teal">
              Seafood
            </Badge>
            <Badge rounded="full" px="2" colorScheme="teal" ml="2">
              British
            </Badge>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {property.title}
          </Box>

          <Box>{property.formattedPrice}</Box>

          <Box d="flex" mt="2" alignItems="center">
            {/* {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? "teal.500" : "gray.300"}
                />
              ))} */}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {property.reviewCount} reviews
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
