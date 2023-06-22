import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type:String, required: true},
        nacionalidade: {type: String}
    },
    {
        // é interessante para se caso for adicionado um novo atributo obrigatório, eu posso setar para que o dado só exista nos autores que tem o version Schema acima de 'x' versionKey
        versionKey: false
    }
)

const autores = mongoose.model('autores', autorSchema);

export default autores;