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
  //   useColorModeValue,
  List,
  Link,
  ListItem,
} from "@chakra-ui/react";
import austinData from "../data";

function TruckInfo() {
  const { id: truckId } = useParams();

  // filter through the AustinData file for the truck we want to display
  const truck = austinData.filter((truck) => truck.id === truckId);

  return (
    <div>
      {truck.map(({ id, name, image_url, url, phone, reviews }) => (
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
                src={image_url}
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
                  {name}
                </Heading>
                <Text
                  // color={useColorModeValue("gray.900", "gray.400")}
                  fontWeight={300}
                  fontSize={"2xl"}
                >
                  {truck.rating}
                </Text>
                <Flex
                  alignItems="center"
                  mt={2}
                  // color={useColorModeValue("gray.700", "gray.200")}
                >
                  {/* <span>{reviewLength} Reviews</span> */}

                  <Link
                    mx={2}
                    cursor="pointer"
                    textDecor="underline"
                    // color={useColorModeValue("blue.600", "blue.400")}
                    wordBreak="break-word"
                    href={`/truck/reviews/${id}`}
                  >
                    See All Reviews
                  </Link>
                </Flex>
              </Box>
              <></>
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
                    {truck.name}
                  </Text>
                </VStack>

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
                        {
                          <Link href={url} target="_blank">
                            Click here to visit site
                          </Link>
                        }
                        <span className="link">
                          <a
                            href={truck.link}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {truck.link}
                          </a>
                        </span>
                      </ListItem>
                      <ListItem className="bold">
                        Phone Number: <span className="unbold">{phone}</span>
                      </ListItem>
                    </List>
                  </SimpleGrid>
                </Box>

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
                        src={image_url}
                        fit={"cover"}
                        align={"center"}
                        w={"100%"}
                      />
                    </SimpleGrid>
                  )}
                </Box>

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
                      href={`/truck/reviews/${id}`}
                      marginBottom={10}
                    >
                      Leave a Review
                    </Link>
                  </SimpleGrid>
                </Box>
              </Stack>
            </Stack>
          </SimpleGrid>
        </div>
      ))}
    </div>
  );
}

export default TruckInfo;

// console.log(truck.findIndex(test));
// const reviewLength = truck.reviews.length;
