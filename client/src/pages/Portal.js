import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Signup from "../components/Signup";
import Login from "../components/Login";

const Portal = () => {
  // Displays either Signup Form or Login Form through Chakra UI Hook
  const { isOpen, onOpen, onClose } = useDisclosure();

  const signupActive = (
    <Flex>
      <Button
        borderRadius="0px"
        variant="ghost"
        className="loginToggle"
        isDisabled={true}
      >
        Sign up
      </Button>
      <Button
        borderRadius="0px"
        variant="ghost"
        className="loginToggle"
        bg={useColorModeValue("#f7fafc", "gray.800")}
        _hover={{ bg: "#E2E8F0" }}
        boxShadow={"inset 2px 0px 1px #E2E8F0"}
        onClick={isOpen ? onClose : onOpen}
      >
        Log in
      </Button>
    </Flex>
  );

  const loginActive = (
    <Flex>
      <Button
        borderRadius="0px"
        variant="ghost"
        className="loginToggle"
        bg={useColorModeValue("#f7fafc", "gray.800")}
        _hover={{ bg: "#E2E8F0" }}
        boxShadow={"inset -2px 0px 1px #E2E8F0"}
        onClick={isOpen ? onClose : onOpen}
      >
        Sign up
      </Button>
      <Button
        borderRadius="0px"
        variant="ghost"
        className="loginToggle"
        isDisabled={true}
      >
        Log in
      </Button>
    </Flex>
  );

  return (
    <div>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={4} mx={"auto"} py={12} px={3} className="signUpForm">
          <Stack align={"center"} textAlign={"center"}>
            <Heading fontSize={"4xl"}>FoodTruckFinder 🌮</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Search for trucks, get access to reviews, and satisfy your
              cravings.
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
          >
            {isOpen ? loginActive : signupActive}
            <Box p={8}>{isOpen ? <Login /> : <Signup />}</Box>
          </Box>

          {/* Login Link for Owners */}
          <Stack pt={6}>
            <Text align={"center"}>
              Own a Truck?{" "}
              <Link color={"blue.400"} href="/portal/owner">
                Register Here!
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </div>
  );
};

export default Portal;
