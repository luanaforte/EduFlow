import Matricula from "../models/Matricula.js";
import Usuario from "../models/Usuario.js";
import Curso from "../models/Cursos.js";

// matricular um usuario em um curso

export const matricularUsuario = async (req, res) => {
    const { usuarioId, cursoId } = req.body

    try {
        // Verifica se o usuário e o curso existem
        const usuario = await Usuario.findByPk(usuarioId)
        const curso = await Curso.findByPk(cursoId)

        if (!usuario || !curso) {
            return res.status(404).json({ message: "Usuário ou curso não encontrado" })
        }

        // Cria a matrícula
        await Matricula.create({ UsuarioId: usuarioId, CursoId: cursoId })
        res.status(201).json({ message: "Matrícula realizada com sucesso" })

    } catch (error) {
        res.status(500).json({ message: "Erro ao matricular usuário", error })
    }
}