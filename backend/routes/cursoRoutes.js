import express from 'express';
import { listarCursos, detalhesCurso } from '../controllers/cursoController.js';

const router = express.Router()

router.get('/', listarCursos)
router.get('/:id', detalhesCurso)

export default router
