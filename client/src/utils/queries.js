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
  query comments($launchId: String!) {
    comments(launchId: $launchId) {
      _id
      commentText
      createdAt
      launchId
      commentAuthor
    }
  }
`;
