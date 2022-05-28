import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../../utils/mutations";
import { ME_QUERY, QUERY_REVIEWS } from "../../utils/queries";
import {
  Box,
  Button,
  chakra,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Textarea,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

function ReviewForm() {
  // Form States
  const [reviewText, setCurrentReviewContent] = useState("");
  const [characterAmount, setCharacterAmount] = useState(0);

  // updates characterAmount/reviewContent state based on User input changes
  const handleUserInput = (event) => {
    if (event.target.value.length <= 1600) {
      setCurrentReviewContent(event.target.value);
      setCharacterAmount(1600 - event.target.value.length);
    }
  };

  // Use mutation from mutations.js
  const [addReview, { error }] = useMutation(CREATE_REVIEW);

  // On submit of Review Form, attempt to save the review to the database
  const formSubmitHandler = async (event) => {
    event.preventDefault();

    // use try/catch to use database mutation CREATE_REVIEW
    try {
      console.log(typeof reviewText);
      await addReview({
        variables: { reviewText },
      });

      console.log("Made it");
      // Clear the textarea and reset Character Limit
      setCurrentReviewContent("");
      setCharacterAmount(0);
    } catch (e) {
      console.error(e);
    }
  };

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
            <form onSubmit={formSubmitHandler}>
              <FormControl>
                <FormLabel>Leave Your Review</FormLabel>
                <Textarea
                  mt={1}
                  rows={3}
                  shadow="sm"
                  focusBorderColor="brand.400"
                  fontSize={{ sm: "sm" }}
                  value={reviewText}
                  onChange={handleUserInput}
                />
              </FormControl>

              {/* Character Count */}
              <chakra.p fontSize={"9px"} textAlign={"right"} marginTop={"2"}>
                Characters Remaining: {characterAmount}
              </chakra.p>

              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  {/* Disclosure to Terms of Use */}
                  <Checkbox required>
                    <chakra.p fontSize={"10px"}>
                      I certify that this review is my true opinion based on my
                      own experiecne and understand FoodTruckFinder's
                      zero-tolerance policy on fake reviews.
                    </chakra.p>
                  </Checkbox>
                </Stack>

                {/* Submit Button -> Form Handler */}
                <Button
                  type="submit"
                  bg={"teal.500"}
                  color={"white"}
                  _hover={{
                    bg: "teal.600",
                  }}
                >
                  Continue
                </Button>

                {/* Display error message if applicable */}
                <chakra.p>
                  {error && (
                    <span>
                      Hmm...we could not process your request. Please try again
                      later!
                    </span>
                  )}
                </chakra.p>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default ReviewForm;
