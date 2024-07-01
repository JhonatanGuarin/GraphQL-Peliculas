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
    const {name, lastName, birthdate, image} = args.actor;
    const newActor = new Actor({name, lastName, birthdate, image});
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
    const actorUpdate = await Actor.findByIdAndUpdate(args.id, { 
      $set: args.actor
    }, {new: true});
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
