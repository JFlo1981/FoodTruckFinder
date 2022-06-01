import React from "react";
import Auth from "../../utils/auth";
import { Link } from "@chakra-ui/react";

const Links = () => {
  console.log(Auth.getProfile().data.isOwner);
  console.log(Auth.getProfile().data);

  // User Dashboard Link
  const userLinks = (
    <div>
      <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: ("gray.200", "gray.300"),
        }}
        href={`/reviews/${Auth.getProfile().data.username}`}
      >
        {"Your Reviews"}
      </Link>
    </div>
  );

  // Owner Account Links
  const ownerLinks = (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: ("gray.200", "gray.300"),
      }}
      href={"/account"}
    >
      {"Account"}
    </Link>
  );

  return (
    <div>
      {Auth.getProfile().data.isOwner ? <> {ownerLinks} </> : <> {userLinks}</>}
    </div>
  );
};

export default Links;
