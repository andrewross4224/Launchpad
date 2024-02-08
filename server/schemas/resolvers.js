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
      throw new AuthenticationError("Please logged in");
    },
  },
  mutation: {
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
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addComments: async (parent, Comments, context) => {
      if (context.user) {
        const data = await Comments.create({
          ...Comments,
          username: context.user.username,
        });
        return data;
      }
      throw new AuthenticationError("Please logged in");
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
      throw new AuthenticationError("You are not authorized to do that.");
    },
    
  },
};
