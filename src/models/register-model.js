import mongoose from 'mongoose';

const { Schema } = mongoose;

const registerSchema = new Schema({

    movieId: {
        type: Schema.Types.ObjectId,
        ref: 'movies',
        required: true
      },

    actorId: {
        type: Schema.Types.ObjectId,
        ref: 'actors',
        required: true
      }

});

const registerModel = mongoose.model('register', registerSchema);

export default registerModel;