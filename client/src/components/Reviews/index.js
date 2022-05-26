import { chakra, Flex } from "@chakra-ui/react";

export default function Reviews() {
  const reviews = [
    {
      name: "user1",
      content: "Loved the Carmel popcorn bag, will definately be coming back!",
    },
    {
      name: "user6785",
      content:
        "I didn't even need help picking popcorn. Everything you can order is great!",
    },
  ];

  if (!reviews.length) {
    return <h3>No Reviews Yet-</h3>;
  }

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
          >
            <Flex
              direction={"column"}
              textAlign={"left"}
              justifyContent={"space-between"}
            >
              <chakra.p
                fontFamily={"Inter"}
                fontWeight={"medium"}
                fontSize={"15px"}
                pb={4}
              >
                {review.content}
              </chakra.p>
              <chakra.p>
                <chakra.span
                  fontFamily={"Inter"}
                  fontWeight={"medium"}
                  color={"gray.500"}
                >
                  {" "}
                  - {review.name}
                </chakra.span>
              </chakra.p>
            </Flex>
          </Flex>
        ))}
    </div>
  );
}
