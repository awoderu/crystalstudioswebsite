import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'  
import Product from './components/product'
import Cart from './pages/cart'
import DisplayLayer from './pages/displaylayer'
import { Link } from 'react-router-dom'

function App() {
  
  return (
    <>
    <Navbar />
    <BrowserRouter>
  
    
     
        <Routes>
          <Route path="/" element={<DisplayLayer />} />
          <Route path="/Home" element={<Home />} />  
          <Route path="/cart" element={<Cart />} />
        </Routes>
      {/* <Home/> */}
        
        
    </BrowserRouter>
      
    </>
  )
}

export default App
