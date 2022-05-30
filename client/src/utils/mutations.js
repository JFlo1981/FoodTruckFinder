import { gql } from "@apollo/client";

export const USER_LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation Mutation($reviewText: String!, $truckId: ID!) {
    addReview(reviewText: $reviewText, truckId: $truckId) {
      _id
    }
  }
`;
