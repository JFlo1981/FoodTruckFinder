import { chakra, Flex, Button } from "@chakra-ui/react";

export default function FriendList() {
  const friends = [{ name: "user1" }, { name: "user6785" }];

  return (
    <div>
      {friends &&
        friends.map((friend) => (
          <Flex
            boxShadow={"lg"}
            direction={{ base: "column", md: "column" }}
            width="250px"
            marginBottom="10"
            rounded={"xl"}
            p={10}
            justifyContent={"space-between"}
            position={"relative"}
          >
            <chakra.p>
              <chakra.span
                fontFamily={"Inter"}
                fontWeight={"medium"}
                color={"gray.500"}
              >
                {" "}
                - {friend.name}
              </chakra.span>
            </chakra.p>

            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              width={"40"}
              ml={4}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              Add Friend
            </Button>
          </Flex>
        ))}
    </div>
  );
}
