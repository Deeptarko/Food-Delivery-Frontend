import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/CartSlice';
import menuReducer from './slices/MenuSlice';
import filterReducer from './slices/FilterSlice'
import authReducer from './slices/AuthSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    menu: menuReducer,
    filters:filterReducer,
    auth:authReducer
  },
})