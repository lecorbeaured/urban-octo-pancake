import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Disclosure from './pages/Disclosure'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/privacy' element={<Privacy/>} />
        <Route path='/disclosure' element={<Disclosure/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
