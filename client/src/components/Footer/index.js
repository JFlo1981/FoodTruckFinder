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
        <Text>©2022 Food Truck Finder. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <Link href={"#"}>Github</Link>
          <Link href={"#"}>About Us</Link>
          <Link href={"#"}>Terms of Use</Link>
        </Stack>
      </Container>
    </Box>
  );
}
