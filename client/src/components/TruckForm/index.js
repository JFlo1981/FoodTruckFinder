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
