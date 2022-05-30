const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    friendCount: Int
    savedTrucks: [Truck]
    reviews: [Review]
    friends: [User]
    isOwner: Boolean!
  }
  type Truck {
    _id: ID
    owners: [String]
    description: String
    image: String
    link: String
    truckName: String
    location: String
    hours: String!
    menu: String
    reviews: [Review]
  }
  type Review {
    _id: ID
    reviewText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }
  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    reviews(username: String): [Review]
    review(_id: ID!): Review
    trucks(username: String): [Truck]
    truck(_id: ID!): Truck
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addReview(reviewText: String!, truckId: ID!): Truck
    removeReview(reviewId: ID!, truckId: ID!): Truck
    addReaction(reviewId: ID!, reactionBody: String!): Review
    addFriend(friendId: ID!): User
    addTruck(
      owners: [String]
      description: String
      image: String
      link: String
      truckName: String
      hours: String
      location: String
    ): User
    removeTruck(_id: ID!): Auth
    editTruck(truckId: String!): Auth
  }
`;

module.exports = typeDefs;
