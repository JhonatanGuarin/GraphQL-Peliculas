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

import {
    createRegister,
    getAllRegisters,
    getRegister,
    deleteRegister,
    updateRegister,
    getActorsByMovieId
} from "./controllers/controll-register.js"

const resolvers = {

    Date: DateResolver,

    Query: {
        getAllActor: getAllActor,

        getActor: getActor,


        getAllMovies: getAllMovies,

        getMovie: getMovie,

        getAllRegisters: getAllRegisters,
        getRegister: getRegister,
        getActorsByMovieId: getActorsByMovieId
    },

    Mutation: {

        createActor: createActor,        
        deleteActor: deleteActor,
        updateActor: updateActor,

        
        createMovie: createMovie,
        deleteMovie: deleteMovie,
        updateMovie: updateMovie,


        createRegister: createRegister,
        deleteRegister: deleteRegister,
        updateRegister: updateRegister
    }
}

export default resolvers;