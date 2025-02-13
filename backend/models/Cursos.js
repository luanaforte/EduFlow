import { DataTypes } from "sequelize";
import sequelize from '../config/db.js'

const Curso = sequelize.define('Curso',  {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    preco: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
})

export default Curso