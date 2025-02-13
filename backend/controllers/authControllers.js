import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario.js';

export const cadastro = async (req, res) => {
    const { nome, email, senha } = req.body;
    
    try {
        const senhaHash = await bcrypt.hash(senha, 10);
        const usuario = await Usuario.create({ nome, email, senha: senhaHash });
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar usuário', error });
    }
};

// Login de usuário 
export const login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const usuario = await Usuario.findOne({ where: { email } });
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        if (!senhaValida) {
            return res.status(401).json({ message: 'Senha inválida' });
        }

        const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error("Erro ao fazer login:", error)
        res.status(500).json({ message: 'Erro ao fazer login', error });
    }
};
