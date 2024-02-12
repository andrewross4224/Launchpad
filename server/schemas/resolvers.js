const { User, Comments } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const data = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return data;
      }
      throw AuthenticationError;
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw AuthenticationError;
      }
      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addComment: async (parent, Comments, context) => {
      if (context.user) {
        const data = await Comments.create({
          ...Comments,
          username: context.user.username,
        });
        return data;
      }
      throw AuthenticationError;
    },
    removeComment: async (parent, { commentId }, context) => {
      if (context.user) {
        const data = await Comments.findOneAndDelete({
          _id: commentId,
          username: context.user.username,
        });
        const comment = await Comments.findById(commentId);
        return data;
      }
      throw AuthenticationError;
    },
    saveLaunch: async (parent, { launchData }, context) => {
      if (context.user) {
        const data = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedLaunches: launchData } },
          { new: true });
        return data;
      }
      throw AuthenticationError;
    },
    removeLaunch: async (parent, { launchId }, context) => {
      if (context.user) {
        const data = await Launch.removeLaunch(
          { _id: context.user._id },
          { $pull: { savedLaunches: { launchId } } },
          { new: true });
        return data;
      }
      throw AuthenticationError;
    },
  },
};


module.exports = resolvers;