import React from "react";
import TruckForm from "../components/TruckForm";
import { Heading } from "@chakra-ui/react";
import Profile from "../components/Profile";
import { useQuery } from "@apollo/client";
import { ME_QUERY } from "../utils/queries";

const Account = () => {
  // use useQuery hook to make query request
  const { loading, error, data } = useQuery(ME_QUERY);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const hasTruck = data.me.savedTrucks[0];

  return (
    <div>
      <Heading textAlign={"center"} marginTop={"10"} marginBottom={"15"}>
        Account Information.
      </Heading>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div> {!hasTruck ? <TruckForm /> : <Profile truck={data} />}</div>
      )}
    </div>
  );
};

export default Account;
