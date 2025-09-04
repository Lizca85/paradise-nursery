import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, updateQuantity } from '../redux/CartSlice.js'

const currency = (n) => `$${n.toFixed(2)}`

export default function CartItems({ onContinueShopping }) {
  const dispatch = useDispatch()
  const items = useSelector((s) => s.cart.items)

  const totals = useMemo(() => {
    const total = items.reduce((sum, item) => {
      const unit = parseFloat(item.cost.substring(1))
      return sum + unit * item.quantity
    }, 0)
    const count = items.reduce((s, it) => s + it.quantity, 0)
    return { total, count }
  }, [items])

  const handleIncrement = (item) => {
    const next = item.quantity + 1
    dispatch(updateQuantity({ id: item.id, quantity: next }))
  }
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
    } else {
      dispatch(removeItem({ id: item.id }))
    }
  }
  const handleRemove = (item) => dispatch(removeItem({ id: item.id }))

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference')
  }

  if (items.length === 0) {
    return (
      <div>
        <h2>Tu carrito está vacío</h2>
        <p className="small">Agrega algunas plantas desde la sección de Productos.</p>
        <button className="btn" onClick={onContinueShopping}>Continuar comprando</button>
      </div>
    )
  }

  return (
    <div>
      <h2>Carrito de compras</h2>
      <div className="table" role="table" aria-label="Artículos en el carrito">
        <div className="row" role="row" style={{fontWeight:700, background:'#fafafa'}}>
          <div></div>
          <div>Producto</div>
          <div>Precio</div>
          <div>Cantidad</div>
          <div>Subtotal</div>
          <div>Acciones</div>
        </div>
        {items.map(item => {
          const unit = parseFloat(item.cost.substring(1))
          const subtotal = unit * item.quantity
          return (
            <div className="row" role="row" key={item.id}>
              <div><img className="thumb" src={item.image} alt={item.name} /></div>
              <div>{item.name}</div>
              <div>{item.cost}</div>
              <div>
                <div style={{display:'inline-flex', gap:'.4rem', alignItems:'center'}}>
                  <button className="btn secondary" onClick={() => handleDecrement(item)} aria-label={`Disminuir ${item.name}`}>-</button>
                  <span aria-live="polite">{item.quantity}</span>
                  <button className="btn secondary" onClick={() => handleIncrement(item)} aria-label={`Aumentar ${item.name}`}>+</button>
                </div>
              </div>
              <div>{currency(subtotal)}</div>
              <div>
                <button className="btn secondary" onClick={() => handleRemove(item)}>Eliminar</button>
              </div>
            </div>
          )
        })}
      </div>

      <div className="total-line">
        <div>Total artículos: {totals.count}</div>
        <div>Total: {currency(totals.total)}</div>
      </div>

      <div className="footer-actions">
        <button className="btn secondary" onClick={onContinueShopping}>Continuar comprando</button>
        <button className="btn" onClick={handleCheckoutShopping}>Pagar</button>
      </div>
    </div>
  )
}
