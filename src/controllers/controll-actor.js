import Actor from "../models/actor-model.js";   

const getAllActor = async () => { 
  try {
    const actors = await Actor.find();
    return actors;
  } catch (error) {
    throw new Error("Error fetching actors: " + error.message);
  }
};   

const getActor = async (_, args) => { 
  try {
    const actor = await Actor.findById(args.id);
    if (!actor) throw new Error("Actor not found");
    return actor;
  } catch (error) {
    throw new Error("Error fetching actor: " + error.message);
  }
};  

const createActor = async (_, args) => {
  try {
    const { name, lastName, birthdate, image } = args.actor;

    // Verificar que el nombre y apellido no estén repetidos
    const existingActor = await Actor.findOne({ name, lastName });
    if (existingActor) {
      throw new Error("An actor with this name and last name already exists");
    }

    // Verificar que la fecha de nacimiento sea menor a la fecha actual
    const birthdateDate = new Date(birthdate);
    const currentDate = new Date();
    if (birthdateDate >= currentDate) {
      throw new Error("Birthdate must be earlier than the current date");
    }

    const newActor = new Actor({ name, lastName, birthdate, image });
    await newActor.save();
    return newActor;
  } catch (error) {
    throw new Error("Error creating actor: " + error.message);
  }
};

const deleteActor = async (_, args) => { 
  try {
    const deletedActor = await Actor.findByIdAndDelete(args.id);
    if (!deletedActor) throw new Error("Actor not found");
    return "Actor deleted";
  } catch (error) {
    throw new Error("Error deleting actor: " + error.message);
  }
};  

const updateActor = async (_, args) => {
  try {
    const { id, actor } = args;
    const { name, lastName, birthdate, image } = actor;

    // Verificar que la combinación de nombre y apellido no esté repetida (excluyendo el actor actual)
    if (name && lastName) {
      const existingActor = await Actor.findOne({ 
        name, 
        lastName, 
        _id: { $ne: id } // excluye el actor actual de la búsqueda
      });
      if (existingActor) {
        throw new Error("An actor with this name and last name already exists");
      }
    }

    // Realizar la actualización
    const actorUpdate = await Actor.findByIdAndUpdate(
      id, 
      { $set: actor },
      { new: true, runValidators: true }
    );

    if (!actorUpdate) throw new Error("Actor not found");
    
    return actorUpdate;
  } catch (error) {
    throw new Error("Error updating actor: " + error.message);
  }
};

export { 
  getAllActor, 
  getActor, 
  createActor, 
  deleteActor, 
  updateActor 
};
