import Usuario from "../models/Usuario.js";

// obtém os dados do perfil do usuário autenticado
export const obterPerfilUsuario = async (req, res) => {
    const { id } = req.user; //o ID vem do token JWT

    try {
        const usuario = await Usuario.findByPk(id, {
            attributes: ["id", "nome", "email"],
        })

        if (!usuario) {
            return res.status(404).json({ message: "Usuário não encontrado" })
        }

        res.json(usuario)
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar perfil do usuário", error })
    }
}
