import React, { useState } from "react";
import api from '../services/api'
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()

    const handleCadastro = async (e) => {
        e.preventDefault()

        try {
            const response = await api.post('/auth/cadastro', { nome, email, senha})

            alert('Usuário cadastrado com sucesso!')

            navigate('/login')
        } catch (error) {
            console.error('Erro ao cadastrar:', error)

            alert('Erro ao cadastrar usuário.')
        }
    }

    return (
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={handleCadastro}>
                <input 
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    typeof="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default Cadastro