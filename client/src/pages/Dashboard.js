import React from "react";
import { useParams } from "react-router-dom";
import Reviews from "../components/Reviews";
import { Avatar, Box, Image, Heading, Text, Flex } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { USER_QUERY } from "../utils/queries";
import Auth from "../utils/auth";

function Dashboard() {
  const { username: userParam } = useParams();

  const { loading, error, data } = useQuery(USER_QUERY, {
    variables: { username: userParam },
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

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

  const contributions = user.reviews.length;

  return (
    <div className="userDashboard">
      <Box w={"full"} boxShadow={"2xl"} rounded={"md"} overflow={"hidden"}>
        <Image
          h={"120px"}
          w={"full"}
          src={
            "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          }
          objectFit={"cover"}
        />
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"xl"}
            src={"https://cdn-icons-png.flaticon.com/512/3442/3442087.png"}
            alt={"Author"}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>
        <Heading textAlign={"center"}>
          Now Viewing {userParam ? `${user.username}'s` : "Your"} Reviews
        </Heading>
        <Text textAlign={"center"}>{contributions} contributions</Text>
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
            <Reviews reviews={user.reviews} />
          </div>
        </Flex>
      </Box>
    </div>
  );
}

export default Dashboard;

// https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ
