import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SplitWithImage() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Story
          </Text>
          <Heading>Food Truck Finder Team</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore. Something something
            something...
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          ></Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={require(`../assets/images/team.png`)}
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
      <Stack
        bg={useColorModeValue("gray.50", "gray.800")}
        py={16}
        px={8}
        spacing={{ base: 8, md: 10 }}
        align={"center"}
        direction={"column"}
        className="topSpace"
      >
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          textAlign={"center"}
          maxW={"3xl"}
        >
          We need to put something else here! ... had an incredible experience
          working with Chakra Templates and were impressed they made such a big
          difference in only three weeks. Our team is so grateful for the
          wonderful improvements they made and their ability to get familiar
          with the product concept so quickly.
        </Text>
      </Stack>
    </Container>
  );
}
