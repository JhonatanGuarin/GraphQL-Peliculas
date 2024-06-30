const typeDefs = `

    scalar Date

    type actor {
        id: ID
        name: String
        lastName: String
        birthdate: Date
    }

    type movie {
        id: ID
        title: String
        gender: String
        year: String
        director: String
        image: String
    }


    type Query {
        getAllActor: [actor]
        getActor(id: ID): actor

        getAllMovies: [movie]
        getMovie(id: ID): movie
    }


    input ActorInput {
        name: String
        lastName: String
        birthdate: Date
    }

    input MovieInput {
        title: String
        gender: String
        year: String
        director: String
        image: String
    }

    type Mutation {
        createMovie(movie: MovieInput!): movie
        deleteMovie(id: ID!): String
        updateMovie(id: ID!, movie: MovieInput): movie

        createActor(actor: ActorInput!): actor
        deleteActor(id: ID!): String
        updateActor(id: ID!, actor: ActorInput): actor
    }

`
export default typeDefs;

