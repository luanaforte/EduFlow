import { useState } from "react";
import axios from "../services/axios.js";
import { useNavigate } from "react-router-dom";

const SignupForm = ( ) => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('/auth/cadastro', { 
        nome, 
        email, 
        senha 
      })

      if (response.status === 201) {
        alert('Cadastro realizado com sucesso!')
        navigate('/login')
      }

    } catch (error) {
        console.error('Erro no backend:', error.response ? error.response.data : error.message)

        alert('Erro ao cadastrar usuário.')
      } 
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />

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

      <button type="submit">Cadastrar</button>

    </form>
  )
}

export default SignupForm