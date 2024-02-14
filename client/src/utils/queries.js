import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      savedLaunches
      tokens {
        token
      }
    }
  }
`;

export const QUERY_COMMENTS = gql`
  query comments($username: String) {
    comments(username: $username) {
      _id
      commentText
      createdAt
      launchId
      commentAuthor
    }
  }
`;
