import React from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  GridItem,
  Heading,
  Button,
  Text,
  chakra,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Input,
  Textarea,
  FormHelperText,
  Icon,
  VisuallyHidden,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

const TruckForm = () => {
  return (
    <div>
      <Box bg={useColorModeValue("gray.50", "inherit")} p={10}>
        <Box>
          <SimpleGrid
            display={{ base: "initial", md: "grid" }}
            columns={{ md: 3 }}
            spacing={{ md: 6 }}
          >
            <GridItem colSpan={{ md: 1 }}>
              <Box px={[4, 0]}>
                <Heading fontSize="lg" fontWeight="md" lineHeight="6">
                  Profile
                </Heading>
                <Text
                  mt={1}
                  fontSize="sm"
                  color={useColorModeValue("gray.600", "gray.400")}
                >
                  This information will be displayed publicly so be careful what
                  you share.
                </Text>
              </Box>
            </GridItem>
            <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
              <chakra.form
                method="POST"
                shadow="base"
                rounded={[null, "md"]}
                overflow={{ sm: "hidden" }}
              >
                <Stack
                  px={4}
                  py={5}
                  bg={useColorModeValue("white", "gray.700")}
                  spacing={6}
                  p={{ sm: 6 }}
                >
                  <SimpleGrid columns={3} spacing={6}>
                    <FormControl as={GridItem} colSpan={[3, 2]}>
                      <FormLabel
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        Website
                      </FormLabel>
                      <InputGroup size="sm">
                        <InputLeftAddon
                          bg={useColorModeValue("gray.50", "gray.800")}
                          color={useColorModeValue("gray.500", "gay.50")}
                          rounded="md"
                        >
                          http://
                        </InputLeftAddon>
                        <Input
                          type="tel"
                          placeholder="www.example.com"
                          focusBorderColor="brand.400"
                          rounded="md"
                        />
                      </InputGroup>
                    </FormControl>
                  </SimpleGrid>

                  <FormControl as={GridItem} colSpan={[6, 4]}>
                    <FormLabel
                      htmlFor="email_address"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Email address
                    </FormLabel>
                    <Input
                      type="text"
                      name="email_address"
                      id="email_address"
                      placeholder="you@example.com"
                      autoComplete="email"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 4]}>
                    <FormLabel
                      htmlFor="email_address"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Owner Name
                    </FormLabel>
                    <Input
                      type="text"
                      name="email_address"
                      id="email_address"
                      placeholder="ex: John Doe"
                      autoComplete="email"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 4]}>
                    <FormLabel
                      htmlFor="email_address"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Truck Name
                    </FormLabel>
                    <Input
                      type="text"
                      name="email_address"
                      id="email_address"
                      placeholder="ex: John Doe's BBQ"
                      autoComplete="email"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>

                  <div>
                    <FormControl id="email" mt={1}>
                      <FormLabel
                        fontSize="sm"
                        fontWeight="md"
                        color={useColorModeValue("gray.700", "gray.50")}
                      >
                        About
                      </FormLabel>
                      <Textarea
                        placeholder="example description of your truck"
                        mt={1}
                        rows={3}
                        shadow="sm"
                        focusBorderColor="brand.400"
                        fontSize={{ sm: "sm" }}
                      />
                      <FormHelperText>
                        Brief description for your food truck. URLs are
                        hyperlinked.
                      </FormHelperText>
                    </FormControl>
                  </div>

                  <FormControl>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue("gray.700", "gray.50")}
                    >
                      Truck Photo
                    </FormLabel>
                    <Flex
                      mt={1}
                      justify="center"
                      px={6}
                      pt={5}
                      pb={6}
                      borderWidth={2}
                      borderColor={useColorModeValue("gray.300", "gray.500")}
                      borderStyle="dashed"
                      rounded="md"
                    >
                      <Stack spacing={1} textAlign="center">
                        <Icon
                          mx="auto"
                          boxSize={12}
                          color={useColorModeValue("gray.400", "gray.500")}
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </Icon>
                        <Flex
                          fontSize="sm"
                          color={useColorModeValue("gray.600", "gray.400")}
                          alignItems="baseline"
                        >
                          <chakra.label
                            htmlFor="file-upload"
                            cursor="pointer"
                            rounded="md"
                            fontSize="md"
                            color={useColorModeValue("brand.600", "brand.200")}
                            pos="relative"
                            _hover={{
                              color: useColorModeValue(
                                "brand.400",
                                "brand.300"
                              ),
                            }}
                          >
                            <span>Upload a file</span>
                            <VisuallyHidden>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                              />
                            </VisuallyHidden>
                          </chakra.label>
                          <Text pl={1}>or drag and drop</Text>
                        </Flex>
                        <Text
                          fontSize="xs"
                          color={useColorModeValue("gray.500", "gray.50")}
                        >
                          PNG, JPG, GIF up to 10MB
                        </Text>
                      </Stack>
                    </Flex>
                  </FormControl>
                </Stack>
                <Box
                  px={{ base: 4, sm: 6 }}
                  py={3}
                  bg={useColorModeValue("gray.50", "gray.900")}
                  textAlign="right"
                >
                  <Button
                    type="submit"
                    bg={"purple.400"}
                    _focus={{ shadow: "" }}
                    fontWeight="md"
                    color={"white"}
                    _hover={{
                      bg: "purple.300",
                    }}
                  >
                    Save
                  </Button>
                </Box>
              </chakra.form>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>
      <Box visibility={{ base: "hidden", sm: "visible" }} aria-hidden="true">
        <Box py={5}>
          <Box
            borderTop="solid 1px"
            borderTopColor={useColorModeValue("gray.200", "whiteAlpha.200")}
          ></Box>
        </Box>
      </Box>
    </div>
  );
};

export default TruckForm;
