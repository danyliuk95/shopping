import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './redux/reducers/productSlice'

export default configureStore({
  reducer: {
    product: productsReducer,
  },
});
