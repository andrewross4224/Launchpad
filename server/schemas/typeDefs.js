const typeDefs = `
    type User {
        _id: ID!
        username: String
        email: String
        location: String
        savedLanches: [Launch]
    }

    type Launch {
        launchId: ID!
        launchDate: 
    }
`