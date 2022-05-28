import { gql } from "@apollo/client";

export const ME_QUERY = gql`
  {
    me {
      _id
      username
      email
      reviews {
        _id
        reviewText
        createdAt
        username
      }
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

export const QUERY_REVIEWS = gql`
  query reviews($username: String) {
    reviews(username: $username) {
      _id
      reviewText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;
