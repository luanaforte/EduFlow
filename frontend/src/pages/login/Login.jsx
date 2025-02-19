import React, { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import './Login.css'
import { InputEmail, InputPass } from "../../components/input/Input";

const Login = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const response = await api.post('/auth/login', { email, senha })
            console.log('Login realizado:', response.data)
            localStorage.setItem('token', response.data.token)
            navigate('/')
        } catch (error) {
            console.error('Erro ao fazer login', error)
        }
    }

    return (
        <div className="container">
            <div id="login" className="formPage">
                <h1>Bem-vindo de volta!</h1>
                <h6 style={{ fontSize: "13px" }}>Já é cadastrado?<br /> Acesse sua conta agora mesmo!</h6>

                <form onSubmit={handleLogin}>
                    <InputEmail
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputPass
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <button type="submit">Entrar</button>
                    <a href="#">Esquecei minha senha</a>
                </form>
            </div>
        </div>
    )
}

export default Login