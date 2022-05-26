import React from "react";
import Reviews from "../components/Reviews";
import { Heading, Text, Flex } from "@chakra-ui/react";
import FriendList from "../components/FriendsList";

function Dashboard() {
  // if the user is not logged in:
  //  if (!user.username) return ( <Text
  //   className="dashboardError"
  //   fontSize={{ base: "md", lg: "lg" }}
  //   color={"gray.500"}
  // >
  //   You need to be logged in to see this page. Use the Sign up button to get
  //   started!
  // </Text>)

  return (
    <div className="userDashboard">
      <Heading textAlign={"center"} paddingTop={"10"} paddingBottom={"15"}>
        "your" Dashboard.
      </Heading>

      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        width={"full"}
        paddingBottom="10"
        rounded={"xl"}
        p={10}
        justifyContent={"space-evenly"}
        position={"relative"}
      >
        <div>
          <Text fontSize="18px" mt={3} mb={2} ml={4}>
            "Your" Reviews:
          </Text>
          <Reviews />
        </div>
        {/* <div>
          <Text fontSize="18px" mt={3} mb={2} ml={4}>
            "Your" Friends:
          </Text>
          <FriendList />
        </div> */}
      </Flex>
    </div>
  );
}

export default Dashboard;
