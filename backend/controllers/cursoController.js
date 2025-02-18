import Curso from "../models/Cursos.js";

// listando todos os cursos disponíveis
export const listarCursos = async (req, res) => {

    try {
        const cursos = await Curso.findAll();
        res.json(cursos);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar cursos", error });
    }
}

// obtendo detalhes de um curso através do ID
export const detalhesCurso = async (req, res) => {
    const { id } = req.params

    try {
        const curso = await Curso.findByPk(id);
        if (!curso) {
            return res.status(404).json({ message: "Curso não encontrado" })
        }
        res.json(curso)
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar detalhes do curso", error })
    }
}