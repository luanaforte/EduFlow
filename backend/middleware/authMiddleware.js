import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Acesso negado. Nenhum token fornecido." });
    }

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.SEGREDO_JWT);
        req.user = decoded; // adiciona os dados do usuário na requisiçao
        next();
    } catch (error) {
        res.status(401).json({ message: "Token inválido." });
    }
};

export default authMiddleware;
