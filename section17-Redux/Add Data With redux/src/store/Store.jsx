// !  npm install @reduxjs/toolkit react-redux

import { configureStore } from "@reduxjs/toolkit";

import ProductReducer from "./reducers/ProductReducer";

import UserReducer from "./reducers/UserReducer";

export const store = configureStore({
  reducer: {
    UserReducer: UserReducer,
    ProductReducer: ProductReducer,
  },
});
