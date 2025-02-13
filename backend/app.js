import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import sequelize from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import cursoRoutes from './routes/cursoRoutes.js'
import modulosRoutes from './routes/modulosRoutes.js'
import matriculaRoutes from './routes/matriculaRoutes.js'

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Testando conexão com o MySQL
sequelize.authenticate()
    .then(() => console.log('Conetado o MySQL'))
    .catch((err) => console.error('Erro ao conectar ao MySQL:', err))

// Rotas
app.get('/', (req, res) => {
    res.send('API EduFlow está funcionando!')
})
app.use('/auth', authRoutes)
app.use('/cursos', cursoRoutes)
app.use('/modulos', modulosRoutes)
app.use('/matriculas', matriculaRoutes)

export default app