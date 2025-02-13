import express from 'express';
import { listarModulos } from '../controllers/moduloController.js';

const router = express.Router();

router.get('/:cursoId/modulos', listarModulos);

export default router;
