const typeDefs = `
    type User {
        _id: ID!
        userName: String!
        email: String!
        location: String!
        savedLaunches: [Launch]
    }

    type Comment {
        _id: ID
        commentText: String
        createdAt: String
        launchId: String
        commentAuthor: String
    }

    type Launch {
        launchId: ID!
        launchDate: String
        location: String
        missionDescription: String
        slug: String
    }

    type Auth {
        token: ID!
        user: User
    }
    
    input LaunchInput {
        launchId: ID!
        launchDate: String
        location: String
        missionDescription: String
        slug: String
    }

    type Query {
        me: User
        comment(launchId: String!): [Comment]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(userName: String!, email: String!, password: String!, location: String!): Auth
        saveLaunch(launchData: LaunchInput!): User
        removeLaunch(launchId: ID!): User
        addComment(commentText: String!, commentAuthor: String!, createdAt: String!, launchId: String!): Comment
        removeComment(commentId: ID!): Comment
    }
`
module.exports = typeDefs;