import React from "react";
import TruckForm from "../components/TruckForm";
import { Heading } from "@chakra-ui/react";
import Profile from "../components/Profile";

// Query for "me"
// If the user had no trucks, display the truckForm
// else, display Profile

const Account = () => {
  return (
    <div>
      <Heading textAlign={"center"} marginTop={"10"} marginBottom={"15"}>
        Account Information.
      </Heading>

      {/* <Profile /> */}

      <TruckForm />
    </div>
  );
};

export default Account;
