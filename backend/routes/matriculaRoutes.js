import express from 'express';
import { matricularUsuario } from '../controllers/matriculaController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/matricular', authMiddleware, matricularUsuario);

export default router;
