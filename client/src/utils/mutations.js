import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
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

export const ADD_USER = gql`
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

export const ADD_COMMENT = gql`
  mutation addComment($commentText: String!) {
    addComment(commentText: $commentText) {
      _id
      commentText
      commentAuthor
      createdAt
      launchId
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation addComment($commentText: String!) {
    removeComment(commentId: $commentId) {
      _id
      commentText
      commentAuthor
      createdAt
      launchId
    }
  }
`;

export const SAVE_LAUNCH = gql`
  mutation saveLaunch($launchId: ID!) {
    saveLaunch(launchId: $launchId) {
      _id
     launchDates
     location
     missionDescription
     slug
    }
  }
`;

export const REMOVE_LAUNCH = gql`
  mutation removeLaunch($launchId: ID!) {
    saveLaunch(launchId: $launchId) {
      _id
     launchDate
     location
     missionDescription
     slug
    }
  }
`;