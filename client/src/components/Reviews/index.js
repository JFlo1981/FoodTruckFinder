import {
  chakra,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Textarea,
  Button,
} from "@chakra-ui/react";
import Response from "../Response";

export default function Reviews() {
  const reviews = [
    {
      name: "user1",
      content: "Loved the Carmel popcorn bag, will definately be coming back!",
      date: "May 19, 2022",
      response: [
        {
          name: "user 42034",
          content: "Agreed, try the honey popcorn next time!",
        },
      ],
    },
    {
      name: "user6785",
      content:
        "I didn't even need help picking popcorn. Everything you can order is great!",
      date: "May 20, 2022",
      response: [
        {
          name: "uioj42034",
          content: "Agreed, try the honey popcorn next time!",
        },
        {
          name: "tjrieow",
          content: "Agreed, try the honey popcorn next time!",
        },
        {
          name: "LoremIpsum",
          content: "Agreefjekowpqjfie",
        },
      ],
    },
  ];

  if (!reviews.length) {
    return (
      <Box>
        <chakra.p>Be the First to Leave a Review!</chakra.p>
      </Box>
    );
  }

  const reply = (
    <Box marginTop={7} paddingLeft={4}>
      <div>
        <FormControl id="email" mt={1}>
          <FormLabel fontSize={"13px"} fontWeight="md" color={"gray.700"}>
            Leave a reply:
          </FormLabel>
          <Textarea
            mt={1}
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{ sm: "sm" }}
          />
        </FormControl>
      </div>

      <Button
        margin={2}
        type="submit"
        size="sm"
        bg={"teal.400"}
        color={"white"}
        _hover={{
          bg: "blue.500",
        }}
      >
        Submit
      </Button>
    </Box>
  );

  return (
    <div>
      {reviews &&
        reviews.map((review) => (
          <Flex
            boxShadow={"lg"}
            maxW={"640px"}
            direction={{ base: "column-reverse", md: "row" }}
            width={"full"}
            rounded={"xl"}
            p={10}
            justifyContent={"space-between"}
            position={"relative"}
            key={review.name}
            marginBottom={3}
          >
            <Flex
              direction={"column"}
              textAlign={"left"}
              justifyContent={"space-between"}
            >
              <div>
                <chakra.p
                  fontFamily={"Inter"}
                  fontWeight={"medium"}
                  fontSize={"17px"}
                  pb={4}
                  marginTop={7}
                >
                  "{review.content}"
                </chakra.p>
                <chakra.p textAlign={"right"}>
                  <chakra.span fontFamily={"Inter"} fontWeight={"medium"}>
                    <span className="bold">{review.name}</span> wrote this
                    review on {review.date}
                  </chakra.span>
                </chakra.p>
              </div>
              <hr></hr>

              {!review.response ? <></> : <Response {...review} />}

              {reply}
            </Flex>
          </Flex>
        ))}
    </div>
  );
}
