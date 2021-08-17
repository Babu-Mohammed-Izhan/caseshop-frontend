import { configureStore } from '@reduxjs/toolkit'
import shoppingcartReducer from './shoppingcartslice';

export const store = configureStore({
  reducer: shoppingcartReducer
})