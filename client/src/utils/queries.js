import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  {
    me {
      _id
      userName
      email
      location
      savedLaunches
      tokens {
        token
      }
    }
  }
`;

export const QUERY_COMMENTS = gql`
  query comment($launchId: String!) {
    comment(launchId: $launchId) {
      _id
      commentText
      createdAt
      launchId
      commentAuthor
    }
  }
`;
