import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Signup = () => {
  // Password Input State
  const [showPassword, setShowPassword] = useState(false);

  // Form State
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Use mutation from auth.js
  const [createUser, { error }] = useMutation(CREATE_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });

    // console.log({ ...formState });
  };

  // On submit of Sign up Form, attempt to add user
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // use try/catch to use database mutation
    // use Auth to assign new token and set to "logged-in"
    try {
      const { newUserData } = await createUser({
        variables: { ...formState },
      });

      Auth.login(newUserData.addUser.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={4} mx={"auto"} py={12} px={3} className="signUpForm">
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Create an account
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features 🌮 🍻
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <form onSubmit={handleFormSubmit}>
                {/* Username input */}
                <FormControl id="username" isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input
                    type="username"
                    placeholder="Your username"
                    name="username"
                    value={formState.username}
                    onChange={handleChange}
                  />
                </FormControl>

                {/* Email input */}
                <FormControl id="email" isRequired>
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
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="******"
                      name="password"
                      id="password"
                      value={formState.password}
                      onChange={handleChange}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                {/* Submit Button */}
                <Stack spacing={10} pt={2}>
                  <Button
                    type="submit"
                    size="lg"
                    bg={"teal.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign up
                  </Button>
                </Stack>
              </form>
              {error && <div>Sign up failed</div>}

              {/* Login Link */}
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link color={"blue.400"} href="/login">
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
};

export default Signup;
