import React, { useState } from "react";
import api from '../../services/api'
import { useNavigate } from "react-router-dom";
import { InputEmail, InputName, InputPass } from "../../components/input/Input";
import './Cadastro.css';

const Cadastro = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()

    const handleCadastro = async (e) => {
        e.preventDefault()

        try {
            const response = await api.post('/auth/cadastro', { nome, email, senha })

            alert('Usuário cadastrado com sucesso!')

            navigate('/login')
        } catch (error) {
            console.error('Erro ao cadastrar:', error)

            alert('Erro ao cadastrar usuário.')
        }
    }

    return (
        <div className="container">
            <div id="cadastro" className="formPage">
                <h1>Crie sua conta</h1>
                <form onSubmit={handleCadastro} className="input">
                    <InputName value={nome} onChange={(e) => setNome(e.target.value)}/>
                    <InputEmail value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <InputPass value={senha} onChange={(e) => setSenha(e.target.value)}/>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default Cadastro