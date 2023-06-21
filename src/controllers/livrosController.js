import livros from '../models/Livro.js';

class LivroController {
  static listarLivros = (req, res) => {
    livros.find((err, livros) => {
      res.status(200).json(livros);
    })
  }
  static cadastrarLivros = (req, res) => {
    //cria um livro baseado no corpo da requisição
    let livro = new livros(req.body);
    // persiste o novo livro no banco
    livro.save((err) => {
      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar o livro`});
      } else {
        res.status(201).send(livro.toJSON());
      }
    })
  }
}

export default LivroController;