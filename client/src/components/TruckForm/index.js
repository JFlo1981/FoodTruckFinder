import React, { useState } from "react";
import {
  Box,
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
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { CREATE_TRUCK } from "../../utils/mutations";

const TruckForm = () => {
  // Form State
  const [formState, setFormState] = useState({
    truckName: "",
    image: "",
    description: "",
    link: "",
    email: "",
    owners: "",
    menu: "",
    location: "",
    hours: "",
  });

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Use mutation from mutations.js
  const [addTruck, { error }] = useMutation(CREATE_TRUCK);

  // On submit of Sign up Form, attempt to add user
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log({ ...formState });

    // use try/catch to use database mutation CREATE_REVIEW
    try {
      console.log(typeof reviewText);
      await addTruck({
        variables: { ...formState },
      });

      window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  // Truck Name Input Field
  const truckName = (
    <FormControl as={GridItem} colSpan={[6, 4]} isRequired>
      <FormLabel
        htmlFor="truckName"
        fontSize="sm"
        fontWeight="md"
        color={useColorModeValue("gray.700", "gray.50")}
      >
        Truck Name
      </FormLabel>
      <Input
        type="text"
        name="truckName"
        id="truckName"
        placeholder="ex: John Doe's BBQ"
        autoComplete="email"
        mt={1}
        focusBorderColor="brand.400"
        shadow="sm"
        size="sm"
        w="full"
        rounded="md"
        onChange={handleChange}
        value={formState.truckName}
      />
    </FormControl>
  );

  // Truck Image Input Field
  const truckImage = (
    <FormControl as={GridItem} colSpan={[6, 4]} isRequired>
      <FormLabel
        htmlFor="image"
        fontSize="sm"
        fontWeight="md"
        color={useColorModeValue("gray.700", "gray.50")}
      >
        A URL for the image of your truck
      </FormLabel>
      <Input
        type="text"
        name="image"
        id="image"
        mt={1}
        placeholder="ex: https://photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1"
        focusBorderColor="brand.400"
        shadow="sm"
        size="sm"
        w="full"
        rounded="md"
        onChange={handleChange}
        value={formState.image}
      />
    </FormControl>
  );

  // Truck Description Input Field
  const truckDescription = (
    <div>
      <FormControl id="description" mt={1} isRequired>
        <FormLabel
          fontSize="sm"
          fontWeight="md"
          color={useColorModeValue("gray.700", "gray.50")}
        >
          About
        </FormLabel>
        <Textarea
          name="description"
          id="description"
          placeholder={`ex: "We are the best place in town for good barbeque!`}
          mt={1}
          rows={3}
          shadow="sm"
          focusBorderColor="brand.400"
          fontSize={{ sm: "sm" }}
          onChange={handleChange}
          value={formState.description}
        />
        <FormHelperText>
          Brief description for your food truck. URLs are hyperlinked.
        </FormHelperText>
      </FormControl>
    </div>
  );

  // Truck Website Input Field
  const truckWebsite = (
    <SimpleGrid columns={3} spacing={6}>
      <FormControl as={GridItem} colSpan={[3, 2]}>
        <FormLabel
          htmlFor="link"
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
            name="link"
            id="link"
            type="tel"
            placeholder="www.example.com"
            focusBorderColor="brand.400"
            rounded="md"
            onChange={handleChange}
            value={formState.link}
          />
        </InputGroup>
      </FormControl>
    </SimpleGrid>
  );

  // Truck Website Email Field
  const truckEmail = (
    <FormControl as={GridItem} colSpan={[6, 4]}>
      <FormLabel
        htmlFor="email"
        fontSize="sm"
        fontWeight="md"
        color={useColorModeValue("gray.700", "gray.50")}
      >
        Email address
      </FormLabel>
      <Input
        type="text"
        name="email"
        id="email"
        placeholder="you@example.com"
        autoComplete="email"
        mt={1}
        focusBorderColor="brand.400"
        shadow="sm"
        size="sm"
        w="full"
        rounded="md"
        onChange={handleChange}
        value={formState.email}
      />
      <FormHelperText>
        Email address for customer contact. (Optional: this will be displayed in
        your listing)
      </FormHelperText>
    </FormControl>
  );

  // Truck Owner's Names Input Field
  const truckOwner = (
    <FormControl as={GridItem} colSpan={[6, 4]}>
      <FormLabel
        htmlFor="owners"
        fontSize="sm"
        fontWeight="md"
        color={useColorModeValue("gray.700", "gray.50")}
      >
        Owner Name(s)
      </FormLabel>
      <Input
        type="text"
        name="owners"
        id="owners"
        placeholder="ex: John Doe"
        autoComplete="email"
        mt={1}
        focusBorderColor="brand.400"
        shadow="sm"
        size="sm"
        w="full"
        rounded="md"
        onChange={handleChange}
        value={formState.owners}
      />
    </FormControl>
  );

  // Truck Menu Input Field
  const truckMenu = (
    <FormControl as={GridItem} colSpan={[6, 4]}>
      <FormLabel
        htmlFor="menu"
        fontSize="sm"
        fontWeight="md"
        color={useColorModeValue("gray.700", "gray.50")}
      >
        A URL for the menu of your menu
      </FormLabel>
      <Input
        type="text"
        name="menu"
        id="menu"
        mt={1}
        placeholder="ex: https://photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1"
        focusBorderColor="brand.400"
        shadow="sm"
        size="sm"
        w="full"
        rounded="md"
        onChange={handleChange}
        value={formState.menu}
      />
    </FormControl>
  );

  // Truck Location Input Field
  const truckLocation = (
    <FormControl as={GridItem} colSpan={[6, 4]} isRequired>
      <FormLabel
        htmlFor="location"
        fontSize="sm"
        fontWeight="md"
        color={useColorModeValue("gray.700", "gray.50")}
      >
        Coordinates of your truck ( lat, lon )
      </FormLabel>
      <Input
        type="text"
        name="location"
        id="location"
        mt={1}
        placeholder="ex: 30.27007, -97.74187"
        focusBorderColor="brand.400"
        shadow="sm"
        size="sm"
        w="full"
        rounded="md"
        onChange={handleChange}
        value={formState.location}
      />
    </FormControl>
  );

  // Truck Hours Input
  const truckHours = (
    <FormControl as={GridItem} colSpan={[6, 4]} isRequired>
      <FormLabel
        htmlFor="hours"
        fontSize="sm"
        fontWeight="md"
        color={useColorModeValue("gray.700", "gray.50")}
      >
        Hours of Operation
      </FormLabel>
      <Input
        type="text"
        name="hours"
        id="hours"
        mt={1}
        placeholder="ex: 9am - 10pm"
        focusBorderColor="brand.400"
        shadow="sm"
        size="sm"
        w="full"
        rounded="md"
        onChange={handleChange}
        value={formState.hours}
      />
    </FormControl>
  );

  return (
    <div>
      <Box
        bg={useColorModeValue("gray.50", "inherit")}
        p={10}
        onSubmit={handleFormSubmit}
      >
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
                  {truckName}
                  {truckImage}
                  {truckDescription}
                  {truckWebsite}
                  {truckEmail}
                  {truckOwner}
                  {truckMenu}
                  {truckLocation}
                  {truckHours}
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
                  {error && (
                    <div>
                      Something went wrong with your request. Please try again
                      later.
                    </div>
                  )}
                </Box>
              </chakra.form>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
};

export default TruckForm;

/*
Hours of Operation

                    // Truck Hours Input
  const truckHours = (
    <>
      {" "}
      <SimpleGrid columns={6} spacing={6}>
        <FormControl as={GridItem} colSpan={[6, 3]} isRequired>
          <FormLabel
            htmlFor="first_name"
            fontSize="sm"
            fontWeight="md"
            color={useColorModeValue("gray.700", "gray.50")}
          >
            Opening Hours
          </FormLabel>
          <Flex alignItems="center" justifyContent="space-around">
            <Select
              id="country"
              name="country"
              autoComplete="country"
              placeholder="-"
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              onChange={handleChange}
              value={formState.openTime}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </Select>
            <Select
              id="country"
              name="country"
              autoComplete="country"
              placeholder="-"
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              onChange={handleChange}
              value={formState.openDay}
            >
              <option>am</option>
              <option>pm</option>
            </Select>
          </Flex>
        </FormControl>

        <FormControl as={GridItem} colSpan={[6, 3]} isRequired>
          <FormLabel
            htmlFor="hours"
            fontSize="sm"
            fontWeight="md"
            color={useColorModeValue("gray.700", "gray.50")}
          >
            Closing Hours
          </FormLabel>
          <Flex alignItems="center" justifyContent="space-around">
            <Select
              id="country"
              name="country"
              autoComplete="country"
              placeholder="-"
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              onChange={handleChange}
              value={formState.closeTime}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </Select>
            <Select
              id="country"
              name="country"
              autoComplete="country"
              placeholder="-"
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              onChange={handleChange}
              value={formState.closeDay}
            >
              <option>am</option>
              <option>pm</option>
            </Select>
          </Flex>
        </FormControl>
      </SimpleGrid>
    </>
  );

  Image Upload
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
*/
