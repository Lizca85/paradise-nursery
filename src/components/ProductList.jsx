import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../redux/CartSlice.js'
import { plantsArray } from '../data/plants.js'

export default function ProductList({ onGoToCart }) {
  const dispatch = useDispatch()
  const items = useSelector((s) => s.cart.items)
  const alreadyInCartIds = useMemo(() => new Set(items.map(i => i.id)), [items])

  const [addedToCart, setAddedToCart] = useState({})

  const categories = useMemo(() => {
    const groups = {}
    plantsArray.forEach(p => {
      groups[p.category] = groups[p.category] || []
      groups[p.category].push(p)
    })
    return groups
  }, [])

  const handleAddToCart = (plant) => {
    dispatch(addItem({ ...plant, quantity: 1 }))
    setAddedToCart((prev) => ({ ...prev, [plant.id]: true }))
  }

  return (
    <div>
      <div className="toolbar">
        <button className="btn" onClick={onGoToCart}>Ir al carrito</button>
      </div>

      {Object.entries(categories).map(([section, plants]) => (
        <div key={section}>
          <h2 className="section-title">{section}</h2>
          <div className="grid">
            {plants.map((plant) => {
              const disabled = addedToCart[plant.id] || alreadyInCartIds.has(plant.id)
              return (
                <article className="card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} loading="lazy" />
                  <div className="content">
                    <div className="title">{plant.name}</div>
                    <div className="small">{plant.description}</div>
                    <div style={{marginTop: 'auto', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                      <strong>{plant.cost}</strong>
                      <button
                        className="btn"
                        disabled={disabled}
                        onClick={() => handleAddToCart(plant)}
                        aria-disabled={disabled}
                        aria-label={disabled ? 'Ya está en el carrito' : 'Agregar al carrito'}
                      >
                        {disabled ? 'Añadido ✓' : 'Agregar'}
                      </button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
