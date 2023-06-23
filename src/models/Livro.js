import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        _id: {type: String},
        titulo: {type: String, required: true},
        //Estamos indicando aqui na chave type que a associação entre os dados irá ocorrer pelo id do autor, 
        // que foi gerado automaticamente pelo MongoDB ao cadastrar um autor na coleção ‘autores’ através de uma requisição POST, 
        // representado pelo ObjectId. Além disso, na chave ref estamos fazendo referência ao nome da coleção no banco.
        autor: {type: mongoose.Schema.Types.ObjectId, ref:'autores', required: true},
        editora: {type: String, required: true},
        numeroPaginas: {type: Number}
    }
);

const livros = mongoose.model('livros', livroSchema);

export default livros;