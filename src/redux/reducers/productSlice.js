import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const getProducts = createAsyncThunk(
  'product/getProducts',
  async (someData, {rejectWithValue}) => {
    try {
      const res = await axios.get('https://6432ee57d0127730d2ddb801.mockapi.io/products');
      return res.data

    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const getProductById = createAsyncThunk(
  'product/getProductById',
  async (id, {rejectWithValue}) => {
    try {
      const res = await axios.get(`https://6432ee57d0127730d2ddb801.mockapi.io/products/${id}`);
      return res.data

    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }



)

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    currentProduct: null,
    searchedProducts: [],
    isSearching: false,
  },
   reducers: {
     searchedOurProduct: (state, action) => {
       // console.log(action.payload, 'action.payload');
       // console.log(state.products, 'state.products!!!');
       state.searchedProducts = state.products.filter(product => product.name.toLowerCase().includes(action.payload.toLowerCase()));
       // console.log(state.searchedProducts, 'state.searchedProducts');
     },
     setIsSearching: (state, action) => {
       state.isSearching = action.payload;
     },
   },

  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      // console.log(action.payload, 'action.payload!!!');
      state.products = action.payload;
    })
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action.error.message);
    })


    builder.addCase(getProductById.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.isLoading = false;
      // console.log(action.payload, 'action.payload!!!');
      state.currentProduct = action.payload;
    })
    builder.addCase(getProductById.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action.error.message);
    })

  }
})

export const { searchedOurProduct, setIsSearching } = productSlice.actions;
export default productSlice.reducer
