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

        <Route path="/" element={Home} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Routes path="/progress:id" element={<CourseProgress />} />

        <Route path="/login" element={<Login />} />
        <Route  path="/cadastro" element={<Cadastro />} />

      </Routes>
    </Router>
  )
}

export default App