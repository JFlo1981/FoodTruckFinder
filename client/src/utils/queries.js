import { gql } from "@apollo/client";

export const ME_QUERY = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

export const USER_QUERY = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;
