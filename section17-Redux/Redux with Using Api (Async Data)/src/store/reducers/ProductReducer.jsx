import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Initial State
const initialState = {
  products: [],
};

// Main synchronous function
export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getproducts: (state, action) => {
      state.products = action.payload;
    },

    userdeleteProduct: (state, action) => {
      state.users.splice(action.payload, 1);
    },
  },
});

export default ProductSlice.reducer;

export const { getproducts } = ProductSlice.actions;
