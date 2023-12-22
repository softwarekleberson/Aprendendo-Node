import {endereco} from "../models/endereco.js"

class EnderecoController {

    static async listarEndereco (req, res){
       
        try {
            
            const listarEndereco = await endereco.find({});

            res.status(200).json(listarEndereco);

        } catch (erro) {
            
            res.status(500).json
            ({message: `${erro.message}
            - falha na requisição`})
        }
    };

    static async listarEnderecoPorId(req, res){

        try {
            
            const id = req.params.id;

            const enderecoEncontrado = await endereco.findById(id);

            res.status(200).json
            (enderecoEncontrado);

        } catch (erro) {
            
            res.status(500).json
            ({message: `${erro.message}- falha ao cadastrar endereco`});
        }
    };

    static async cadastrarEndereco (req, res) {

        try {
          const novoEndereco = await endereco.create(req.body);
          res.status(201).json({ message: "criado com sucesso", endereco});
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha ao cadastrar de endereco` });
        }
      };

    static async atualizarEndereco(req, res) {

        try {
            
            const id = req.params.id;

            await endereco.findByIdAndUpdate(id, req.body);

            res.status(200).json({message: "Endereco atualizado"});

        } catch (erro) {
            
            res.status(500).json
            ({message: `${erro.message}`});
        }
    };

    static async excluirEndereco(req,res){

        try {
            
            const id = req.params.id;

            await endereco.findByIdAndDelete(id);

            res.status(200).json
            ({message: "Endereco excluído com sucesso"});

        } catch (erro) {
            
            res.status(500).json
            ({message: `${erro.message}- falha na exclusão`})
        }
    };
};

export default EnderecoController;