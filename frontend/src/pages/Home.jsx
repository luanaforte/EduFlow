import React, { useEffect, useState } from 'react';
import api from '../services/api.js';

const Home = () => {
    const [cursos, setCursos] = useState([]);  

    useEffect(() => {
        const buscarCursos = async () => {
            try {
                const response = await api.get('/cursos');  
                setCursos(response.data);  
            } catch (error) {
                console.error('Erro ao buscar cursos:', error);  
            }
        };

        buscarCursos();  
    }, []);  

    return (
        <div>
            <h1>Bem-vindo ao EduFlow!</h1>
            <p>Explore nossos cursos e comece a aprender hoje mesmo</p>
            
            <div>
                <h2>Cursos Disponíveis:</h2>
                <ul>
                    {cursos.map((curso) => (
                        <li key={curso.id}>{curso.titulo}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
