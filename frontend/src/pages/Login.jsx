import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../services/axios.js";

const Login = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate() 

    const handleLogin = async (e) => {
        e.preventDefault() 

        try {
            const reponse = await axios.post('.auth/login', { email, senha })
            console.log('Login realizdo:', response.data)
            localStorage.setItem('token', response.data.token)
            navigate('/')
        } catch (error) {
            console.erro('Erro ao fazer login', error)
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default Login