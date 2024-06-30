import mongoose from 'mongoose';

const {Schema} = mongoose

const movieSchema = new Schema({

    title : {
        type: String,
        required : true
    },
    gender : {
        type: String,
        required : true
    },
    year : {
        type: String,
        required : true
    },
    director : {
        type: String,
        required : true
    },
    image: {
        type: String,
        required : true
    }
  })
  
const movieModel = mongoose.model('movies',movieSchema)
export default movieModel;