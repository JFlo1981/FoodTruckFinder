import React from "react";
import TruckForm from "../components/TruckForm";
import { Heading } from "@chakra-ui/react";
import Profile from "../components/Profile";

const Account = () => {
  return (
    <div>
      <Heading textAlign={"center"} marginTop={"10"} marginBottom={"15"}>
        "your" Account Information.
      </Heading>

      {/* <Profile /> */}

      <TruckForm />
    </div>
  );
};

export default Account;
