import { useState } from 'react';
import axios from '../axios';

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post('/auth/login', { email, senha });
        onLogin(response.data.token); 
        } catch (error) {
        console.error('Erro no login:', error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
            />
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm;