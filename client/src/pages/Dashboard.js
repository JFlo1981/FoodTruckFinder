import React from "react";
import { Heading, Text } from "@chakra-ui/react";

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
    <div>
      <Heading textAlign={"center"} marginTop={"10"}>
        "your" Dashboard.
      </Heading>
    </div>
  );
}

export default Dashboard;
