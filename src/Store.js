import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/CartSlice';
import menuReducer from './slices/MenuSlice';


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    menu: menuReducer,
  },
})