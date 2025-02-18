import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Usuario from "./Usuario.js";
import Curso from "./Cursos.js";

const Matricula = sequelize.define("Matricula", {
    UsuarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Usuario,
            key: "id",
        },
    },
    CursoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Curso,
            key: "id",
        },
    },
    status: {
        type: DataTypes.ENUM("ativo", "concluido", "cancelado"),
        allowNull: false,
        defaultValue: "ativo",
    },
    data_matricula: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
})

export default Matricula