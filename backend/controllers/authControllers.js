import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario.js';

// cadastro de usuário
export const cadastro = async (req, res) => {
    try {
        const { nome, email, senha } = req.body

        if (!nome || !email || !senha) {
            return res.status(400).json({ message: 'Nome, email e senha são obrigatórios' })
        }

        // verifica se o usuario já existe
        const usuarioExistente = await Usuario.findOne({ where: { email } })

        if (usuarioExistente) {
            return res.status(409).json({ message: 'Email já cadastrado.' })
        }
        
        // cria hash da senha
        const senhaHash = await bcrypt.hash(senha, 10)

        // cria o usuário

        const usuario = await Usuario.create({ nome, email, senha: senhaHash })

        // gerar token JWT
        const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '1h' })

        console.log('Usuário criado com sucesso: ', usuario)

        res.status(201).json({ 
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            token: token
         })
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error)

        return res.status(500).json({ message: 'Erro ao cadastrar usuário', error: error.message })
    }
}

// Login de usuário 
export const login = async (req, res) => {
    const { email, senha } = req.body

    if (!email || !senha) {
        return res.status(400).json({ message: 'Email e senha são obrigatórios.' })
    }

    try {
        const usuario = await Usuario.findOne({ where: { email } })
        console.log('Usuário encontrado:', usuario)

        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado' })
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha)

        if (!senhaValida) {
            return res.status(401).json({ message: 'Senha inválida' })
        }

        const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '1h' })

        res.status(200).json({ token })
    } catch (error) {
        console.error("Erro ao fazer login:", error)
        res.status(500).json({ message: 'Erro ao fazer login', error })
    }
}
