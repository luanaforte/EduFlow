import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    // verificar se o token tá armazenando no localstorage
    const token = localStorage.getItem('token')

    if (!token) {
        return <Navigate to='/login' replace />
    }

    return <Outlet /> //renderiza o conteúdo das páginas protegidas caso o usuário não esteja autenticado
}

export default PrivateRoute