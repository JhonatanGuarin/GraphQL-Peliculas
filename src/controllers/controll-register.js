import Register from "../models/register-model.js";

const createRegister = async (_, args) => {
    try {
      const { movieId, actorId } = args.register;
      const newRegister = new Register({ movieId, actorId });
      await newRegister.save();
      return newRegister;
    } catch (error) {
      throw new Error("Error creating register: " + error.message);
    }
  }

const getAllRegisters = async () => {
    try {
      const registers = await Register.find().populate('movieId').populate('actorId');
      return registers;
    } catch (error) {
      throw new Error("Error fetching registers: " + error.message);
    }
  }

const getActorsByMovieId = async (_, { movieId }) => {
    try {
      const registers = await Register.find({ movieId }).populate('actorId');
      if (!registers.length) {
        throw new Error("No actors found for this movie");
      }
      return registers.map(register => register.actorId);
    } catch (error) {
      throw new Error("Error fetching actors for movie: " + error.message);
    }
  }

const getRegister = async (_, { id }) => {
    try {
      const register = await Register.findById(id).populate('movieId').populate('actorId');
      if (!register) {
        throw new Error("Register not found");
      }
      return register;
    } catch (error) {
      throw new Error("Error fetching register: " + error.message);
    }
  }

  const deleteRegister = async (_, args) => {
    try {
      const deletedRegister = await Register.findByIdAndDelete(args.id);
      if (!deletedRegister) throw new Error("Register not found");
      return "Register deleted";
    } catch (error) {
      throw new Error("Error deleting register: " + error.message);
    }
  };
  
  const updateRegister = async (_, args) => {
    try {
      const registerUpdate = await Register.findByIdAndUpdate(args.id, {
        $set: args.movie
      }, { new: true });
      if (!registerUpdate) throw new Error("Register not found");
      return registerUpdate;
    } catch (error) {
      throw new Error("Error updating register: " + error.message);
    }
  };


  export {
    createRegister,
    getAllRegisters,
    getRegister,
    deleteRegister,
    updateRegister,
    getActorsByMovieId
  };