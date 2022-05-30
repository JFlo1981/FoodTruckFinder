const { AuthenticationError } = require("apollo-server-express");
const { User, Review, Truck } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("reviews")
          .populate("friends");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("reviews")
        .populate("friends");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("friends")
        .populate("reviews")
        .populate("savedTrucks");
    },
    reviews: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Review.find(params).sort({ createdAt: -1 });
    },
    review: async (parent, { _id }) => {
      return Review.findOne({ _id });
    },
    trucks: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Truck.find(params).sort({ createdAt: -1 }).populate("reviews");
    },
    truck: async (parent, { _id }) => {
      return Truck.findOne({ _id }).populate("reviews");
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addReview: async (parent, { reviewText, truckId }, context) => {
      if (context.user) {
        const review = await Review.create({
          reviewText,
          username: context.user.username,
        });

        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { reviews: review._id } },
          { new: true }
        );

        const updatedTruck = await Truck.findByIdAndUpdate(
          { _id: truckId },
          { $push: { reviews: review._id } },
          { new: true }
        );

        return updatedTruck;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    addReaction: async (parent, { reviewId, reactionBody }, context) => {
      if (context.user) {
        const updatedReview = await Review.findOneAndUpdate(
          { _id: reviewId },
          {
            $push: {
              reactions: { reactionBody, username: context.user.username },
            },
          },
          { new: true, runValidators: true }
        );

        return updatedReview;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate("friends");

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    addTruck: async (parent, args, context) => {
      if (context.user) {
        const truck = await Truck.create({
          ...args,
        });

        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedTrucks: truck._id } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    removeTruck: async (parent, args, context) => {
      if (context.user) {
        const removedTruck = await Truck.deleteOne({ _id: { ...args } });

        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { savedTrucks: removedTruck._id } },
          { new: true }
        );

        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;

// editTruck: async (parent, { truckId }, context) => {
//   if (context.user) {

//   }
//  }
