import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Textarea,
  Checkbox,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

function ReviewForm() {
  return (
    <Flex align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"xl"} py={2} px={3}>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Leave Your Review</FormLabel>
              <Textarea
                mt={1}
                rows={3}
                shadow="sm"
                focusBorderColor="brand.400"
                fontSize={{ sm: "sm" }}
              />
            </FormControl>

            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>
                  I certify that this review is my true opinion based on my own
                  experiecne and understand FoodTruckFinder's zero-tolerance
                  policy on fake reviews.
                </Checkbox>
              </Stack>
              <Button
                bg={"gray.900"}
                color={"white"}
                _hover={{
                  bg: "gray.700",
                }}
              >
                Continue
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default ReviewForm;
