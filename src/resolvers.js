import { DateResolver } from 'graphql-scalars';

import {
    getAllActor,
    getActor,
    createActor,
    deleteActor,
    updateActor
} from "./controllers/controll-actor.js"

import {
    getAllMovies,
    getMovie,
    createMovie,
    deleteMovie,
    updateMovie
} from "./controllers/controll-movie.js"

const resolvers = {

    Date: DateResolver,

    Query: {
        getAllActor: getAllActor,

        getActor: getActor,

        getAllMovies: getAllMovies,

        getMovie: getMovie,
    },

    Mutation: {

        createActor: createActor,
        
        deleteActor: deleteActor,

        updateActor: updateActor,

        
        createMovie: createMovie,

        deleteMovie: deleteMovie,

        updateMovie: updateMovie,
    }
}

export default resolvers;