import mongoose from "mongoose";

const enderecoSchema = new mongoose.Schema
({
    id: {type: mongoose.Schema.Types.ObjectId},

    rua: {type: String, require: true},

    numero: {type: String, require: true},

    cep: {type: String, require: true},

    observacao: {type: String}

}, {versionKey: false});

const endereco = mongoose.model("enderecos", enderecoSchema);

export { enderecoSchema, endereco };
