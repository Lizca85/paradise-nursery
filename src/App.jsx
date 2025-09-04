import React, { useState, useMemo } from 'react'
import Navbar from './components/Navbar.jsx'
import ProductList from './components/ProductList.jsx'
import CartItems from './components/CartItems.jsx'

export default function App() {
  const [page, setPage] = useState('home')

  const navigate = (to) => setPage(to)

  const content = useMemo(() => {
    if (page === 'home') {
      return (
        <div className="hero">
          <div>
            <h1>Paradise Nursery</h1>
            <p>Plantas de interior para espacios más frescos, con envíos a toda Colombia. Explora nuestras secciones de Aromáticas y Medicinales, y arma tu carrito en segundos.</p>
            <div className="toolbar" style={{justifyContent:'center'}}>
              <button className="btn" onClick={() => setPage('plants')}>Ver plantas</button>
            </div>
          </div>
        </div>
      )
    }
    if (page === 'plants') return <ProductList onGoToCart={() => setPage('cart')} />
    if (page === 'cart') return <CartItems onContinueShopping={() => setPage('plants')} />
    return null
  }, [page])

  return (
    <div>
      <Navbar onNavigate={navigate} />
      <div className="container">
        {content}
      </div>
    </div>
  )
}
