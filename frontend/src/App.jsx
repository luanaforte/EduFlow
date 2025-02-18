import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import CourseDetails from './pages/CourseDetails.jsx'
import CourseProgress from  './pages/CourseProgress.jsx'
import Login from './pages/Login.jsx'
import Cadastro from './pages/Cadastro.jsx'

function App() {
  return (
    <Router>
      <Routes>
        {/*rota pública*/}
        <Route path="/" element={<Home />} />

        {/* Rota para detalhes do curso */}
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/progress/:id" element={<CourseProgress />} />

        {/* rotas para login e cadastro */}
        <Route path="/login" element={<Login />} />
        <Route  path="/cadastro" element={<Cadastro />} />

      </Routes>
    </Router>
  )
}

export default App