import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartState {
  items: { id: number; title: string; quantity: number  ,price:number ,  image:string}[]
}

const initialState: CartState = {
  items: [],
}

const initialSavedCard = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{  image:string , price:number , id: number; title: string }>) => {
      const existing = state.items.find(i => i.id === action.payload.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer
