import './App.css'
import { Routes, Route } from 'react-router-dom'
import Pagehome from './Pages/Pagehome'
import About from './Pages/About'
import Skills from './Pages/Skill'
import Projects from './Pages/Project'
import Education from './Pages/Educationexp'
import Contact from './Pages/Contact'

import MyNavbar from './Components/Navbar'


function App() {

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
