import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api.js';

const CourseDetails = () => {
    const { id } = useParams()
    const [curso, setCurso] = useState(null)
    const [modulos, setModulos] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState('')

    useEffect(() => {
        const buscarCurso = async () => {
            try {
                const response = await api.get(`/cursos/${id}`)
                setCurso(response.data)
            } catch (error) {
                setErro('Erro ao carregar detalhes do curso.')
                console.error(error)
            } finally {
                setCarregando(false)
            }
        }

        buscarCurso()
    }, [id])

    useEffect(() => {
        const buscarModulos = async () => {
            try {
                const response = await api.get(`/cursos/${id}/modulos`)

                setModulos(response.data)
            } catch (error) {
                console.error('Erro ao buscar módulos:', error)
            }
        }

        buscarModulos()
    }, [id])

    if (carregando) {
        return <p>Carregando...</p>
    }

    if (erro) {
        return <p>{erro}</p>
    }

    return (
        <div>
            <h1>{curso.titulo}</h1>
            <p>{curso.descricao}</p>
            <p>Preço: R$ {curso.preco.toFixed(2)}</p>
            {/* Adicione mais detalhes do curso aqui */}
        </div>
    )
}

export default CourseDetails
