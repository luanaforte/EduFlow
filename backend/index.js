import sequelize from "./config/db.js";
import app from './app.js';

import Curso from "./models/Cursos.js";
import Modulo from "./models/Modulo.js";
import Matricula from "./models/Matricula.js";
import Usuario from "./models/Usuario.js";

// relacionamentos entre os modelos
Curso.hasMany(Modulo, { foreignKey: "CursoId" })
Modulo.belongsTo(Curso, { foreignKey: "CursoId" })

Usuario.belongsToMany(Curso, { through: Matricula })
Curso.belongsToMany(Usuario, { through: Matricula })

// verificaçao da conexão com o banco de dados
sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados bem-sucedida!')
    })
    .catch((err) => {
        console.error('Não foi possível conectar ao banco de dados:', err)
        process.exit(1) // Caso não consiga conectar, encerrar o processo
    })

sequelize.sync({ alter: true })
    .then(() => console.log("Modelos sincronizados com o banco de dados."))
    .catch((err) => console.error("Erro ao sincronizar modelos:", err))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Servidor está aberto na porta ${PORT}`)
})