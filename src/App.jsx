import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Shop from './pages/Shop'
import DisplayLayer from './pages/displaylayer'

import Cart from './pages/cart'
import { ShopContextProvider } from './context/shopcontext'

function AppLayout() {
  const { pathname } = useLocation()
  const isDisplayLayer = pathname === '/'

  return (
    <>
      {!isDisplayLayer && <Navbar />}
      <Routes>
        <Route path="/" element={<DisplayLayer />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

function App() {
  
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </ShopContextProvider>
  )
}

export default App
