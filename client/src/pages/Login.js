import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { USER_LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Login = () => {
  // Form State
  const [formState, setFormState] = useState({ email: "", password: "" });

  // updates state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Use mutation from auth.js
  const [userLogin, { error }] = useMutation(USER_LOGIN);

  // On submit of Log in Form, attempt to log User in
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // use try/catch to use database mutation
    // use Auth to assign new token and set to "logged-in"
    try {
      const { data } = await userLogin({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Welcome back! 🎉</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={handleFormSubmit}>
              {/* Email input */}
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  placeholder="example@example.com"
                  name="email"
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </FormControl>

              {/* Password input */}
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="******"
                  name="password"
                  id="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>

                {/* Login Button */}
                <Button
                  type="submit"
                  bg={"teal.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
              {error && <div>Login failed</div>}
            </form>

            {/* Signup Link */}
            <Stack pt={6}>
              <Text align={"center"}>
                New user?{" "}
                <Link color={"blue.400"} href="/signup">
                  Sign Up
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
