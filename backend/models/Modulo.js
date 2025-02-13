import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Curso from "./Cursos.js"; 

const Modulo = sequelize.define("Modulo", {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: { 
        type: DataTypes.TEXT,
        allowNull: false,
    },
    CursoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Curso,
            key: "id",
        },
        onDelete: "CASCADE", 
    },
});

export default Modulo;
