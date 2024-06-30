import mongoose from 'mongoose';

const URI = "mongodb+srv://jhonatancamilo99:12345@proyecto.j13wixj.mongodb.net/ProyectoGraphQL?retryWrites=true&w=majority&appName=Proyecto";

mongoose.set('strictQuery', true);  // o false, dependiendo de tu preferencia

try {
  await mongoose.connect(URI);
  console.log('Connect Success...');
} catch (err) {
  console.log(err);
}

export default mongoose;