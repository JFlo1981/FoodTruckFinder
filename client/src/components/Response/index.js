import React from "react";
import { Box, Flex, chakra } from "@chakra-ui/react";

function Response(review) {
  const responses = review.response;
  return (
    <div>
      {responses &&
        responses.map((response) => (
          <Box marginTop={2} paddingLeft={4}>
            <Flex
              direction={"column"}
              textAlign={"left"}
              justifyContent={"space-between"}
            >
              <chakra.p>
                <chakra.span
                  fontSize={"13px"}
                  fontFamily={"Inter"}
                  fontWeight={"medium"}
                >
                  Response from <span className="bold">{response.name}</span>
                </chakra.span>
              </chakra.p>

              <chakra.p
                fontFamily={"Inter"}
                fontWeight={"medium"}
                fontSize={"17px"}
                pb={4}
                marginTop={7}
              >
                "{response.content}"
              </chakra.p>
              <hr></hr>
            </Flex>
          </Box>
        ))}
    </div>
  );
}

export default Response;
