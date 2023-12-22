import mongoose from "mongoose";
import { enderecoSchema } from "./endereco.js";

const clienteSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, require: true },
  idade: { type: Date },
  email: { type: String, require: true, unique: true },
  senha: { type: String, require: true },
  endereco: enderecoSchema,
}, { versionKey: false });

const cliente = mongoose.model("clientes", clienteSchema);

export default cliente;
