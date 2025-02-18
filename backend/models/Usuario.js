import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Usuario = sequelize.define('Usuario', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: "Formato de email inválido."
            }
        }
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

export default Usuario