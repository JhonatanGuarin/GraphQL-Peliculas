const typeDefs = `

    scalar Date

    type actor {
        id: ID
        name: String
        lastName: String
        birthdate: Date
        image: String
    }

    type movie {
        id: ID
        title: String
        gender: String
        year: String
        director: String
        image: String
        actors: [actor]
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
        image: String
    }

    input MovieInput {
        title: String
        gender: String
        year: String
        director: String
        image: String
        actors: [ID]
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

