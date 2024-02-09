const typeDefs = `
    type User {
        _id: ID!
        username: String
        email: String
        location: String
        savedLaunches: [Launch]
    }

    type Comment {
        _id: ID!
        commentText: String
        createdAt: String
        launchId: String
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
        comments(launchId: String): [Comment]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveLaunch(launchData: LaunchInput!): User
        removeLaunch(launchId: ID!): User
        addComment(commentText: ID!, commentText: String!): Comment
        removeComment(commentId: ID!): Comment
    }
`