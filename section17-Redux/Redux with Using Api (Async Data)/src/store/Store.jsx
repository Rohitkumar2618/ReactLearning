// !  npm install @reduxjs/toolkit react-redux

import { configureStore } from "@reduxjs/toolkit";

import UserReducers from "./reducers/UserReducers";

import ProductReducer from "./reducers/ProductReducer";

export const store = configureStore({
  reducer: {
    UserReducers: UserReducers,
    ProductReducer: ProductReducer,
  },
});
