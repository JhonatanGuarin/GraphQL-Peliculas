import { DateResolver } from 'graphql-scalars';
import Actor from "./models/actor-model.js"; 
import Movie from './models/movie-model.js';


const resolvers = {

    Date: DateResolver,

    Query: {
        getAllActor: async () => {
            const actor = await Actor.find()
            return actor
        },

        getActor: async (_, args) => {
            const actor = await Actor.findById(args.id)
            return actor
        },

        getAllMovies: async () => {
            const movie = await Movie.find()
            return movie
        },

        getMovie: async (_, args) => {
            const movie = await Movie.findById(args.id)
            return movie
        }
    },

    Mutation: {

        createActor: async (_, args) => {
            const {name, lastName, birthdate} = args.actor
            const newActor = new Actor({name, lastName, birthdate})
            await newActor.save()
            return newActor
        },
        
        deleteActor: async (_, args) => {
            await Actor.findByIdAndDelete(args.id)
            return "Actor delete"
        },

        updateActor: async (_, args) => {
           const actorUpdate = await Actor.findByIdAndUpdate(args.id, {
            $set: args.actor
           }, {new: true})

           return actorUpdate
        },
        
        createMovie: async (_, args) => {
            const {title, gender, year, director, image} = args.movie
            const newMvoie = new Movie({title, gender, year, director, image})
            await newMvoie.save()
            return newMvoie
        },

        deleteMovie: async (_, args) => {
            await Movie.findByIdAndDelete(args.id)
            return "Movie delete"
        },

        updateMovie: async (_, args) => {
           const movieUpdate = await Movie.findByIdAndUpdate(args.id, {
            $set: args.movie
           }, {new: true})

           return movieUpdate
        }
    }
}

export default resolvers;