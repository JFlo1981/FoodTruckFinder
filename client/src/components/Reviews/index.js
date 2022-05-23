import { chakra, Flex } from "@chakra-ui/react";

export default function Reviews() {
  const reviews = [
    {
      name: "user1",
      content:
        "It really saves me time and effort. It is exactly what our business has been lacking. EEZY is the most valuable business resource we have EVER purchased. After using EEZY my business skyrocketed!",
    },
    {
      name: "user6785",
      content:
        "I didn't even need training. We've used EEZY for the last five years. I have gotten at least 50 times the value from EEZY. I made back the purchase price in just 48 hours!",
    },
  ];

  return (
    <div>
      {reviews &&
        reviews.map((review) => (
          <Flex
            boxShadow={"lg"}
            maxW={"640px"}
            direction={{ base: "column-reverse", md: "row" }}
            width={"full"}
            marginBottom="10"
            rounded={"xl"}
            p={10}
            justifyContent={"space-between"}
            position={"relative"}
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
