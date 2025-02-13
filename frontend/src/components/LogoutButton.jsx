import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token') // remove o token do localStorage
    navigate('/login') //redireciona para a página de login
  }

  return <button onClick={handleLogout}>Sair</button>
}

export default LogoutButton
