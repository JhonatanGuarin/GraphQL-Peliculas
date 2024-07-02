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
    }

    type register {
        id: ID
        movieId: movie
        actorId: actor

    }


    type Query {
        getAllActor: [actor]
        getActor(id: ID): actor

        getAllMovies: [movie]
        getMovie(id: ID): movie

        getAllRegisters: [register]
        getRegister(id: ID): register
        getActorsByMovieId(movieId: ID!): [actor]

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
    }

    input RegisterInput {
        movieId: ID!
        actorId: ID!
    }




    type Mutation {
        createMovie(movie: MovieInput!): movie
        deleteMovie(id: ID!): String
        updateMovie(id: ID!, movie: MovieInput): movie

        createActor(actor: ActorInput!): actor
        deleteActor(id: ID!): String
        updateActor(id: ID!, actor: ActorInput): actor

        createRegister(register: RegisterInput!): register
        deleteRegister(id: ID!): String
        updateRegister(id: ID!, register: RegisterInput): register

    }

`
export default typeDefs;

