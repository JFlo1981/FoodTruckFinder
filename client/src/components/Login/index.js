import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { USER_LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth";
import {
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
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
    <Stack spacing={4}>
      <form onSubmit={handleFormSubmit}>
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
            direction={{ base: "row", sm: "column" }}
            align={"start"}
            justify={"space-between"}
          >
            <Checkbox marginTop={2}>Remember me</Checkbox>

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
            Login
          </Button>
        </Stack>
        {error && <div>Login failed</div>}
      </form>
    </Stack>
  );
};

export default Login;
