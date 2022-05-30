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

export const CREATE_TRUCK = gql`
  mutation Mutation(
    $owners: String
    $description: String
    $image: String
    $link: String
    $truckName: String
    $hours: String
    $location: String
    $menu: String
  ) {
    addTruck(
      owners: $owners
      description: $description
      image: $image
      link: $link
      truckName: $truckName
      hours: $hours
      location: $location
      menu: $menu
    ) {
      _id
    }
  }
`;
