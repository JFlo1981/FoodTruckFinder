import React from "react";
import {
  chakra,
  Flex,
  Box,
  useRadio,
  // FormControl,
  // FormLabel,
  // Textarea,
  // Button,
} from "@chakra-ui/react";
// import Response from "../Response";
import austinData from "../data";
import { useParams } from "react-router-dom";


const Reviews = ({ reviews, truckName }) => {

  // console.log(reviews);
  const { id: truckId } = useParams();
  if (!reviews) {
    return (
      <Box>
        <chakra.p>Be the First to Leave a Review!</chakra.p>
      </Box>
    );
  }

  
  const truck = austinData.filter((truck) => truck.id === truckId);
  const test = truck.map((truck) => truck.reviews.map((text) => text));
  console.log(truck);


  return (

    <>
    {truck[0].reviews.map(({name, id, text, user}) => (
      <div>
     
      <Flex
        boxShadow={"lg"}
        maxW={"640px"}
        direction={{ base: "column-reverse", md: "row" }}
        width={"full"}
        rounded={"xl"}
        p={10}
        justifyContent={"space-between"}
        position={"relative"}
        key={id}
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
              "{text}"
            </chakra.p>
            <chakra.p textAlign={"right"}>
              <chakra.span fontFamily={"Inter"} fontWeight={"medium"}>
                <span className="bold">{user.name}</span> wrote this
                review on {truckName}
              </chakra.span>
            </chakra.p>
          </div>
          <hr></hr>

          {/* {!review.response ? <></> : <Response {...review} />} */}

          {/* {reply} */}
        </Flex>
      </Flex>
    
</div>
    ))}
  </>
    
  );
};

export default Reviews;