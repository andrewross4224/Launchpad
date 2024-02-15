import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  {
    me {
      _id
      userName
      email
      savedLaunches
      tokens {
        token
      }
    }
  }
`;

export const QUERY_COMMENTS = gql`
  query comments($userName: String) {
    comments(userName: $userName) {
      _id
      commentText
      createdAt
      launchId
      commentAuthor
    }
  }
`;
