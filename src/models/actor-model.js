import mongoose from 'mongoose';

const { Schema } = mongoose;

const actorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    }
});

const actorModel = mongoose.model('actores', actorSchema);

export default actorModel;