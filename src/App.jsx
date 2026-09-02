import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Pagehome from './Pages/Pagehome'
import About from './pages/About'
import Skills from './pages/Skill'
import Projects from './pages/Project'
import Education from './pages/Educationexp'
import Contact from './pages/Contact'

import MyNavbar from './Components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <MyNavbar />

      <Routes>

        <Route path="/" element={<Pagehome />} />

      <Route path="/about" element={<About />} />

      <Route path="/skills" element={<Skills />} />

      <Route path="/projects" element={<Projects />} />

      <Route path="/education" element={<Education />} />

      <Route path="/contact" element={<Contact />} />

    </Routes>

    </>
  )
}

export default App
