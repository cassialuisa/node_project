import express from "express";
import db from './config/dbConnect.js';
import livros from './models/Livro.js';
import routes from './routes/index.js';

//preve o erro de conexão
db.on("error", console.log.bind(console, 'Erro de conexão'))
//tenta conectar ao banco 
db.once('open', () => {
    console.log('Conexão com o banco feita com sucesso')
})

const app = express();

// recurso do Express que vai conseguir fazer interpretar o que está chegando via post ou via put e transformar aquilo em um objeto para eu poder armazenar, visualizar e manipular.
app.use(express.json());

routes(app);


app.get('/livros/:id',(req, res) => {
    let index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
})

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id);
}
export default app