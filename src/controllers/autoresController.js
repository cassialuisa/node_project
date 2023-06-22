import autores from '../models/Autor.js';

class AutorController {
  static listarAutores = (req, res) => {
    autores.find((err, autores) => {
      res.status(200).json(autores);
    })
  }
  static buscarPeloId = (req, res) => {
    const id = req.params.id;
    autores.findById(id, (err, autor) => {
      if(err){
        res.status(400).send({message: `${err.message} Id do autor não localizado.`})
      } else {
        res.status(200).send(autor)
      }
    })
  }
  static cadastrarAutores = (req, res) => {
    //cria um autor baseado no corpo da requisição
    let autor = new autores(req.body);
    // persiste o novo autor no banco
    autor.save((err) => {
      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar o autor`});
      } else {
        res.status(201).send(autor.toJSON());
      }
    })
  }
  static atualizarAutor = (req, res) => {
    //pega o valor que está no endereço da rota
    const id = req.params.id;
    //com o mongo a palavra reservada que usamos para atualizar é o set
    autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err){
        res.status(200).send({message: 'Autor atualizado com sucesso!'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }
  static apagarAutor = (req, res) => {
    const id = req.params.id;
    autores.findByIdAndDelete(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Autor removido da lista'});
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }
}

export default AutorController;