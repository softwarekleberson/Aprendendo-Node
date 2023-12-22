import mongoose from "mongoose";

const url = 'mongodb://127.0.0.1:27017/alura';
async function dbConnect() {
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Banco conectado com sucesso")
  } catch (error) {
    console.error('Erro de conexão:', error);
  }
}

export default dbConnect;
