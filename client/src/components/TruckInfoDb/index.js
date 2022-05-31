import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
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
import { useQuery } from "@apollo/client";
import { QUERY_TRUCK } from "../../utils/queries";

function TruckInfoDb() {
  const { id: truckId } = useParams();

  const { loading, data } = useQuery(QUERY_TRUCK, {
    variables: { id: truckId },
  });

  const truck = data?.truck || {};

  if (loading) {
    return <div>Now Loading...</div>;
  }

  const reviewLength = truck.reviews.length;

  // Display Business Information: Email, Website
  const businessDisplay = (
    <Box>
      <Text
        fontSize={{ base: "16px", lg: "18px" }}
        // color={useColorModeValue("yellow.500", "yellow.300")}
        fontWeight={"500"}
        textTransform={"uppercase"}
        mb={"4"}
      >
        Business Information
      </Text>

      <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
        <List spacing={2}>
          <ListItem className="bold">
            Website:{" "}
            <span className="link">
              <a href={truck.link} rel="noopener noreferrer" target="_blank">
                {truck.link}
              </a>
            </span>
          </ListItem>
          <ListItem className="bold">
            Email: <span className="unbold">{truck.email}</span>
          </ListItem>
        </List>
      </SimpleGrid>
    </Box>
  );

  // Display Menu (if available, else inform the customer)
  const menuDisplay = (
    <Box>
      <Text
        fontSize={{ base: "16px", lg: "18px" }}
        color={"yellow.500"}
        fontWeight={"500"}
        textTransform={"uppercase"}
        mb={"4"}
      >
        Menu
      </Text>
      {!truck.menu ? (
        <p>Menu Currently Unavailable</p>
      ) : (
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
      )}
    </Box>
  );

  // Display Truck Reviews (if available, else inform the customer)
  const reviewDisplay = (
    <Box>
      <Text
        fontSize={{ base: "16px", lg: "18px" }}
        // color={useColorModeValue("yellow.500", "yellow.300")}
        fontWeight={"500"}
        textTransform={"uppercase"}
        mb={"4"}
      >
        Recent Reviews
      </Text>

      <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
        {/* <Reviews reviews={truck.reviews} /> */}
        <Link
          mx={2}
          cursor="pointer"
          textDecor="underline"
          // color={useColorModeValue("blue.600", "blue.400")}
          wordBreak="break-word"
          href={`/truck/reviews/${truck._id}`}
          marginBottom={10}
        >
          Leave a Review
        </Link>
      </SimpleGrid>
    </Box>
  );

  return (
    <div>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        {/* Truck Image */}
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
        {/* Truck Basic Information */}
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {truck.truckName}
            </Heading>
            <Text
              // color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              {truck.hours}
            </Text>
            <Flex
              alignItems="center"
              mt={2}
              // color={useColorModeValue("gray.700", "gray.200")}
            >
              <span>{reviewLength} Reviews</span>

              <Link
                mx={2}
                cursor="pointer"
                textDecor="underline"
                // color={useColorModeValue("blue.600", "blue.400")}
                wordBreak="break-word"
                href={`/truck/reviews/${truck._id}`}
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
              // borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                // color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                {truck.description}
              </Text>
            </VStack>

            {businessDisplay}

            {menuDisplay}

            {reviewDisplay}
          </Stack>
        </Stack>
      </SimpleGrid>
    </div>
  );
}

export default TruckInfoDb;
