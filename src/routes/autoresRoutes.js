import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router
	.get('/autores', AutorController.listarAutores)
	.get('/autores/:id', AutorController.buscarPeloId)
	.post('/autores', AutorController.cadastrarAutores)
	.put('/autores/:id', AutorController.atualizarAutor)
	.delete('/autores/:id', AutorController.apagarAutor)

export default router;