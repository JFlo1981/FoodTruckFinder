import React from "react";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SplitWithImage() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Story
          </Text>
          <Heading>The Food Truck Finder Team</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Food Truck Finder is an app that allows you to find Food Trucks in
            your area. Also, owners of Food Trucks can create an account and add
            their Food Truck to be discovered in searches. Truck owners can
            customize their listing by adding their menus, photos of their food,
            location and hours of operation. When you’re hungry and want to find
            Food Trucks in your area, search by your city and be able to zoom
            into the Food Trucks near you. We have A LOT of new and fun features
            coming to the app in the near future!
          </Text>
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            textAlign={"left"}
            maxW={"3xl"}
          >
            The development team behind this app are 4 students of the
            University of Texas Coding Bootcamp, Liz Dieterich, Jarod Florence,
            James “Dylan” Killelea, and Bradley Boyd.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          ></Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
