import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  Image,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import Auth from "../../utils/auth";
import Links from "../Links";

const Header = () => {
  // Mobile Nav definitions through Chakra UI Hook
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Light/Darkmode Chakra UI Hook
  const { colorMode, toggleColorMode } = useColorMode();

  // On submit of Logout Buttom, attempt sign User out
  // Will reload to the homepage
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          {/* Mobile Nav Toggle Button */}
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            {/* Logo */}
            <Box>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"/"}
              >
                <Image
                  src={require("../../assets/images/logo1.png")}
                  alt="truck"
                  className="logo"
                />
              </Link>
            </Box>
            {/* Nav Links */}
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: ("gray.200", "gray.300"),
                }}
                href={"/search"}
              >
                {"Search for Trucks"}
              </Link>

              {/* Links Component */}
              {Auth.loggedIn() ? (
                <>
                  <Links />
                </>
              ) : (
                <></>
              )}
            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
            {/* Light/Dark Mode Button */}
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            {/* Login/Auth Portal Button */}
            <Menu>
              <Button
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"pink.400"}
                _hover={{
                  bg: "pink.300",
                }}
              >
                {Auth.loggedIn() ? (
                  <a href="/" onClick={logout}>
                    Logout
                  </a>
                ) : (
                  <a href="/portal">Sign In</a>
                )}
              </Button>
            </Menu>
          </Flex>
        </Flex>

        {/* Mobile Hidden Nav */}
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: ("gray.200", "gray.300"),
                }}
                href={"/search"}
              >
                {"Search for Trucks"}
              </Link>

              {/* Links Component */}
              {Auth.loggedIn() ? (
                <>
                  <Links />
                </>
              ) : (
                <></>
              )}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </div>
  );
};

export default Header;
