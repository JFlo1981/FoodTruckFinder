import React from "react";
import { useParams } from "react-router-dom";
import Reviews from "../components/Reviews";
import { Heading, Text, Flex } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { USER_QUERY, ME_QUERY } from "../utils/queries";
import Auth from "../utils/auth";

function Dashboard() {
  const { username: userParam } = useParams();

  const { data } = useQuery(userParam ? USER_QUERY : ME_QUERY, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // if the user is not logged in, advise to Signin
  if (!Auth.loggedIn()) {
    return (
      <Text
        className="dashboardError"
        fontSize={{ base: "md", lg: "lg" }}
        color={"gray.500"}
      >
        You need to be logged in to see this page. Use the Sign up button to get
        started!
      </Text>
    );
  }

  return (
    <div className="userDashboard">
      <Heading textAlign={"center"} paddingTop={"10"} paddingBottom={"15"}>
        Now Viewing {user.username}'s Profile
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
            {userParam ? `${user.username}'s` : `Your`} Reviews:
          </Text>
          <Reviews />
        </div>
      </Flex>
    </div>
  );
}

export default Dashboard;
