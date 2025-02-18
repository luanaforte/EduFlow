import Modulo from "../models/Modulo.js";

//lista todos os módulos de um curso
export const listarModulos = async (req, res) => {
    const { cursoId } = req.params

    try {
        const modulos = await Modulo.findAll({ where: { CursoId: cursoId } })

        if (modulos.length === 0) {
            return res.status(404).json({ message: "Nenhum módulo encontrado para este curso" })
        }

        res.json(modulos)
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar módulos", error })
    }
}