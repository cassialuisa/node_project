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
  static atualizarLivro = (req, res) => {
    //pega o valor que está no endereço da rota
    const id = req.params.id;
    //com o mongo a palavra reservada que usamos para atualizar é o set
    livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err){
        res.status(200).send({message: 'Livro atualizado com sucesso!'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }
  static apagarLivro = (req, res) => {
    const id = req.params.id;
    livros.findByIdAndDelete(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Livro removido da lista'});
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }
}

export default LivroController;