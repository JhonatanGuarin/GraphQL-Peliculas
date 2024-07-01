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
    },
    image: {
        type: String,
        required : true
    }
});

const actorModel = mongoose.model('actors', actorSchema);

export default actorModel;