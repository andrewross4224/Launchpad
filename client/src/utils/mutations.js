import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $location: String!) {
    addUser(username: $username, email: $email, password: $password, location: $location) {
      token
      user {
        _id
        userName
        email
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($commentText: String!, $launchId: String!, $commentAuthor: String!, $createdAt: String!) {
    addComment(commentText: $commentText, launchId: $launchId, commentAuthor: $commentAuthor, createdAt: $createdAt) {
      _id
      commentText
      commentAuthor
      createdAt
      launchId
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation addComment($commentText: ID!) {
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
     launchDate
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
      userName
     email
     savedLaunches {
      launchId
      slug 
      location
      launchDate
      missionDescription
     }
    }
  }
`;