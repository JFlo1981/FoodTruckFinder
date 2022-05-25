import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SmallWithNavigation() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"column"} spacing={0}>
          <Text>©2022 FoodTruckFinder. All rights reserved</Text>
          <Text>
            Made with Love and
            <Link
              href={"https://chakra-ui.com/"}
              rel="noopener noreferrer"
              target="_blank"
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
              className="smallLeft"
            >
              Chakra UI
            </Link>
          </Text>
        </Stack>

        <Stack direction={"row"} spacing={6}>
          <Link
            href={"https://github.com/JFlo1981/FoodTruckFinder"}
            rel="noopener noreferrer"
            target="_blank"
          >
            Github
          </Link>
          <Link href={"/about"}>About Us</Link>
          <Link href={"/terms"}>Terms of Use</Link>
        </Stack>
      </Container>
    </Box>
  );
}
