import Movie from "../models/movie-model.js";

const getAllMovies = async () => {
  try {
    const movies = await Movie.find();
    return movies;
  } catch (error) {
    throw new Error("Error fetching movies: " + error.message);
  }
};

const getMovie = async (_, args) => {
  try {
    const movie = await Movie.findById(args.id);
    if (!movie) throw new Error("Movie not found");
    return movie;
  } catch (error) {
    throw new Error("Error fetching movie: " + error.message);
  }
};

const createMovie = async (_, args) => {
  try {
    const { title, gender, year, director, image, actors } = args.movie;
    const newMovie = new Movie({ title, gender, year, director, image, actors });
    await newMovie.save();
    return newMovie;
  } catch (error) {
    throw new Error("Error creating movie: " + error.message);
  }
};

const deleteMovie = async (_, args) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(args.id);
    if (!deletedMovie) throw new Error("Movie not found");
    return "Movie deleted";
  } catch (error) {
    throw new Error("Error deleting movie: " + error.message);
  }
};

const updateMovie = async (_, args) => {
  try {
    const movieUpdate = await Movie.findByIdAndUpdate(args.id, {
      $set: args.movie
    }, { new: true });
    if (!movieUpdate) throw new Error("Movie not found");
    return movieUpdate;
  } catch (error) {
    throw new Error("Error updating movie: " + error.message);
  }
};

export {
  getAllMovies,
  getMovie,
  createMovie,
  deleteMovie,
  updateMovie
};
