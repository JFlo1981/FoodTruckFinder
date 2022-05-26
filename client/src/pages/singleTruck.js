import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  Link,
  ListItem,
} from "@chakra-ui/react";
import Reviews from "../components/Reviews";

function SingleTruck() {
  const truck = {
    name: "Popcornopolis",
    hours: "9:00am - 11:00pm",
    reviewCount: "3",
    image:
      "https://images.unsplash.com/photo-1565097158282-1094bd0fe46a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
    description:
      "This is a popcorn foodtruck which sells any kind of popcorn you can think of.",
    website: "https://popcornopolis.com",
    email: "popolopis@gmail.com",
    owner: "John Doe, Polly Popcorn",
    menu: "https://images.unsplash.com/photo-1599250300435-b9693f21830d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
  };
  return (
    <div>
      {" "}
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={truck.image}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {truck.name}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                {truck.hours}
              </Text>
              <Flex
                alignItems="center"
                mt={2}
                color={useColorModeValue("gray.700", "gray.200")}
              >
                <span>{truck.reviewCount} Reviews</span>

                <Link
                  mx={2}
                  cursor="pointer"
                  textDecor="underline"
                  color={useColorModeValue("blue.600", "blue.400")}
                  wordBreak="break-word"
                >
                  See All Reviews
                </Link>
              </Flex>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={"2xl"}
                  fontWeight={"300"}
                >
                  {truck.description}
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Business Information
                </Text>

                <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Website: {truck.website}</ListItem>
                    <ListItem>Email: {truck.email}</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Menu
                </Text>

                <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
                  <Image
                    rounded={"md"}
                    alt={"product image"}
                    src={truck.menu}
                    fit={"cover"}
                    align={"center"}
                    w={"100%"}
                  />
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Reviews
                </Text>

                <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
                  <Reviews />
                </SimpleGrid>
              </Box>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </div>
  );
}

export default SingleTruck;
