import cliente from "../models/cliente.js";
import {endereco } from "../models/endereco.js";

class ClienteController {

    static async listarClientes (req, res) {
        try {
            const listarClientes = await cliente.find({});

            res.status(200).json(listarClientes);

        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    };

    static async listarClientePorId(req, res){

        try {

            const id = req.params.id;

            const clienteEncontrado = await cliente.findById(id);

            res.status(200).json(clienteEncontrado);
            
        } catch (erro) {
            
            res.status(500).json({message: `${erro.message}- falha na requisição do cliente`});
        }
    };

    static async cadastrarCliente(req, res) {

        const novoCliente = req.body;

        try {

            const enderecoEncontrado = await endereco.findById(novoCliente.endereco);

            const clienteCompleto = {...
            novoCliente, endereco: {
            ...enderecoEncontrado._doc }};
            
            const clienteCriado = await cliente.create(clienteCompleto);

            res.status(201).json({message: "criado com sucesso", cliente: clienteCriado});

        } catch (erro) {
            
            res.status(500).json({message: `${erro.message}- falha ao cadastrar cliente`});
        }
    };

    static async atualizarCliente (req, res) {

        try {
            
            const id = req.params.id;

            await cliente.findByIdAndUpdate(id, req.body);

            res.status(200).json({message: "Cliente atualizado"});

        } catch (erro) {
            
            res.status(500).json({message: `${erro.message}- falha na atualização`});

        }
    };

    static async excluirCliente(req, res){

        try {
            
            const id = req.params.id;

            await cliente.findByIdAndDelete(id);

            res.status(200).json({message: "cliente excluído com sucesso"});

        } catch (erro) {
            
            res.status(500).json({message: `${erro.message}- falha na exclusão`});
        }
    };
};

export default ClienteController;