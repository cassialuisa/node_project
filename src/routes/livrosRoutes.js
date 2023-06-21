import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
	.get('/livros', LivroController.listarLivros)
	.get('/livros/:id', LivroController.buscarPeloId)
	.post('/livros', LivroController.cadastrarLivros)
	.put('/livros/:id', LivroController.atualizarLivro)
	.delete('/livros/:id', LivroController.apagarLivro)

export default router;