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
    const { title, gender, year, director, image } = args.movie;

    // Verificar que el título no esté repetido
    const existingMovie = await Movie.findOne({ title });
    if (existingMovie) {
      throw new Error("A movie with this title already exists");
    }

    // Verificar que el año sea mayor a 1950
    if (parseInt(year) <= 1950) {
      throw new Error("The movie year must be greater than 1950");
    }

    const newMovie = new Movie({ title, gender, year, director, image });
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
    const { id, movie } = args;
    const { title, year } = movie;

    // Verificar que el título no esté repetido (excluyendo la película actual)
    if (title) {
      const existingMovie = await Movie.findOne({ 
        title, 
        _id: { $ne: id } // excluye la película actual de la búsqueda
      });
      if (existingMovie) {
        throw new Error("A movie with this title already exists");
      }
    }

    // Verificar que el año sea mayor a 1950
    if (year) {
      if (parseInt(year) <= 1950) {
        throw new Error("The movie year must be greater than 1950");
      }
    }

    // Realizar la actualización
    const movieUpdate = await Movie.findByIdAndUpdate(
      id, 
      { $set: movie },
      { new: true, runValidators: true }
    );

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
