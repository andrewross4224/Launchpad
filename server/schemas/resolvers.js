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
    comment: async (parent, args) => {
      return Comments.find({ launchId: args.launchId });
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
    addComment: async (parent, { commentAuthor, commentText, createdAt, launchId }, context) => {
      if (context.user) {
        const data = await Comments.create({
          commentAuthor,
          commentText,
          createdAt,
          launchId
        });
        return data;
      }
      throw AuthenticationError;
    },
    removeComment: async (parent, { commentId }, context) => {
      if (context.user) {
        const data = await Comments.findOneAndDelete({
          _id: commentId,
        });
        const comment = await Comments.findById(commentId);
        return data;
      }
      throw AuthenticationError;
    },
    saveLaunch: async (parent, { launchData }, context) => {
      console.log(context.user)
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
        const data = await User.findByIdAndUpdate(
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