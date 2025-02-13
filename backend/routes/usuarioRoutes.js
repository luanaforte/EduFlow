import express from 'express';
import { obterPerfilUsuario } from '../controllers/usuarioController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/perfil', authMiddleware, obterPerfilUsuario);

export default router;
