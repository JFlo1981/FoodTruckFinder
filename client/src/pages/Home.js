import React from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  Heading,
  Image,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";

function Home() {
  return (
    <div>
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={
          "url(https://images.unsplash.com/photo-1626186241349-5d5f44407f55?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Every day is a good day for Food Trucks.
            </Text>
            <Stack direction={"row"}>
              <Button
                bg={"yellow.400"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "whiteAlpha.500" }}
              >
                <Link href={"/search"}>Search for Trucks</Link>
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                Find Food Trucks
              </Text>
              <br />{" "}
              <Text color={"blue.400"} as={"span"}>
                Or Register Your Truck
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              Food Truck Finder offers you the ability to locate trucks in your
              area, leave reviews, and save your favorite trucks!
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"green.400"}
                color={"white"}
                _hover={{
                  bg: "green.500",
                }}
              >
                <Link href={"/signup"}>I am a New User</Link>
              </Button>
              <Button rounded={"full"}>
                <Link href={"/login"}>User Login</Link>
              </Button>
            </Stack>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              Own a truck? Register your business information so Users locate
              your truck and swing by!
            </Text>

            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                I am a Truck Owner
              </Button>
              <Button rounded={"full"}>Owner Login</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1604467715878-83e57e8bc129?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776"
            }
          />
        </Flex>
      </Stack>
    </div>
  );
}

export default Home;
