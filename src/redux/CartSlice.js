import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [] // cada item: { id, name, image, cost, quantity }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const incoming = action.payload
      const found = state.items.find(i => i.id === incoming.id)
      if (found) {
        found.quantity += incoming.quantity || 1
      } else {
        state.items.push({ ...incoming, quantity: incoming.quantity || 1 })
      }
    },
    removeItem: (state, action) => {
      const { id } = action.payload
      state.items = state.items.filter(i => i.id !== id)
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload
      const found = state.items.find(i => i.id === id)
      if (found) {
        found.quantity = Math.max(0, quantity)
        if (found.quantity === 0) {
          state.items = state.items.filter(i => i.id !== id)
        }
      }
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
