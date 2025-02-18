import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../services/axios.js';

const CourseDetails = () => {
    const { id } = useParams()
    const [curso, setCurso] = useState(null)
    const [modulos, setModulos] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState('')

    useEffect(() => {
        const buscarCurso = async () => {
            try {
                const response = await axios.get(`/cursos/${id}`)
                if (response.data && response.data.titulo && response.data.descricao) {
                    setCurso(response.data)
                } else {
                    setErro('Dados do curso não estão no formato esperado.')
                }
                
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
                const response = await axios.get(`/cursos/${id}/modulos`)
                if (Array.isArray(response.data)) {
                    setModulos(response.data)
                } else {
                    console.error('A resposta não é um array de módulos:', response.data)
                }
                
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
            {curso ? (
                <>
                    <h1>{curso.titulo}</h1>
                    <p>{curso.descricao}</p>
                    <p>Preço: R$ {curso.preco ? curso.preco.toFixed(2) : 'N/A'}</p>
                </>
            ) : (
                <p>Curso não encontrado.</p>
            )}

            <div>
                <h2>Módulos:</h2>
                {modulos.length > 0 ? (
                    modulos.map((modulo) => (
                        <div key={modulo.id}>
                            <h3>{modulo.titulo}</h3>
                            <p>{modulo.descricao}</p>
                        </div>
                    ))
                ) : (
                    <p>Não há módulos disponíveis para este curso.</p>
                )}
            </div>
        </div>
    )
}

export default CourseDetails
