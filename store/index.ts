import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './CardSlice'
import { favoriteReducer } from './FaivoriteSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    Faivorite:favoriteReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
