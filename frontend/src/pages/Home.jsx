import React, { useEffect, useState } from 'react';
import axios from '../services/axios.js';

const Home = () => {
    const [cursos, setCursos] = useState([])  
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState('')

    useEffect(() => {
        const buscarCursos = async () => {
            try {
                const response = await axios.get('/cursos')  
                if (Array.isArray(response.data)) {
                    setCursos(response.data)
                } else {
                    setErro('A resposta da axios não é um array válido')
                }
                  
            } catch (error) {
                setErro('Erro ao buscar cursos.')
                console.error('Erro ao buscar cursos:', error)  
            } finally {
                setCarregando(false) // finaliza o carregamento
            }
        }

        buscarCursos()  
    }, [])  

    if (carregando) {
        return <p>Carregando cursos...</p>
    } 

    if (erro) {
        return <p>{erro}</p>
    }

    return (
        <div>
            <h1>Bem-vindo ao EduFlow!</h1>
            <p>Explore nossos cursos e comece a aprender hoje mesmo</p>
            
            <div>
                <h2>Cursos Disponíveis:</h2>
                {cursos.length > 0 ? (
                    <ul>
                        {cursos.map((curso) => (
                            <li key={curso.id}>{curso.titulo}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Não há cursos disponíveis no momento.</p>
                )}
            </div>
        </div>
    )
}

export default Home
