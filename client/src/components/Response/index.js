import React from "react";
import { Box, Flex, chakra } from "@chakra-ui/react";

function Response(review) {
  const responses = review.response;
  return (
    <div>
      {responses &&
        responses.map((response) => (
          <Box marginTop={4} paddingLeft={4}>
            <Flex
              direction={"column"}
              textAlign={"left"}
              justifyContent={"space-between"}
              key={response.name}
            >
              <chakra.p
                fontFamily={"Inter"}
                fontWeight={"medium"}
                fontSize={"17px"}
                pb={4}
                marginTop={3}
              >
                "{response.content}"
              </chakra.p>
              <chakra.p textAlign={"right"}>
                <chakra.span
                  fontSize={"13px"}
                  fontFamily={"Inter"}
                  fontWeight={"medium"}
                >
                  <span className="bold">{response.name}</span> Responded
                </chakra.span>
              </chakra.p>
              <hr></hr>
            </Flex>
          </Box>
        ))}
    </div>
  );
}

export default Response;
