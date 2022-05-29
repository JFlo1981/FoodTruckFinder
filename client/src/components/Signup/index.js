import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
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
  const [addUser, { error }] = useMutation(CREATE_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // On submit of Sign up Form, attempt to add user
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log({ ...formState });
    // use try/catch to use database mutation
    // use Auth to assign new token and set to "logged-in"
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
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
          <Stack spacing={10} pt={2} marginTop={5}>
            <Button
              type="submit"
              size="lg"
              bg={"teal.400"}
              color={"white"}
              _hover={{
                bg: "teal.500",
              }}
            >
              Create An Account
            </Button>
          </Stack>
        </form>
        <Text align={"center"} fontSize={"11px"}>
          By signing up you agree to our{" "}
          <Link color={"blue.400"} href="/terms">
            Terms of Use
          </Link>
        </Text>
        {error && <div>Sign up failed</div>}
      </Stack>
    </div>
  );
};

export default Signup;
