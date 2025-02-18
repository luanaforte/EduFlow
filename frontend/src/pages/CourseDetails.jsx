import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../services/api.js'

const CourseDetails = () => {

    const { id } = useParams()
    const [curso, setCursos] = useState(null)
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState('')

    useEffect(() => {
        const buscarCurso = async () => {
            
            try {
                const response = await api.get(`/cursos/${id}`)
                setCursos(response.data)
            } catch (error) {
                setErro('Erro ao carregar detalhes do curso.')
                console.error(error)
            } finally {
                setCarregando(false)
            }
        }

        buscarCurso()
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
            {/* adicionar mais detalhes do curso */}
        </div>
    )

    const [modulos, setModulos] = useState([])

    useEffect (() => {
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

    //exibir módulos
    {modulos.map((modulo) => (

        <div key={modulo.id}>
            <h3>{modulo.titulo}</h3>
            <p>{modulo.descricao}</p>
        </div>
        
    ))}
}

export default CourseDetails