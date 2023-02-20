import { useState } from 'react'
import './App.css'
import './styles/navbar.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
function App() {

  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Skills/>
    </div>
  )
}

export default App
