import React from 'react'
import { useSelector } from 'react-redux'

export default function Navbar({ onNavigate }) {
  const totalItems = useSelector((state) => state.cart.items.reduce((s, it) => s + it.quantity, 0))

  return (
    <nav className="navbar">
      <div className="brand" role="button" onClick={() => onNavigate('home')} aria-label="Ir a inicio">Paradise Nursery</div>
      <div className="nav-links">
        <button className="btn secondary" onClick={() => onNavigate('home')}>Inicio</button>
        <button className="btn secondary" onClick={() => onNavigate('plants')}>Plantas</button>
        <button className="btn" onClick={() => onNavigate('cart')} aria-label="Ver carrito">
          🛒 <span className="badge" aria-live="polite">{totalItems}</span>
        </button>
      </div>
    </nav>
  )
}
