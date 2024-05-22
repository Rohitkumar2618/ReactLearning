// !importing
import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  value: 0,
};

export const counterReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //! Actions jo update kre real time me page ko uske functions

    // ! Add by 1
    increment: (state) => {
      state.value += 1;
    },

    // ! sub by 1

    decrement: (state) => {
      state.value -= 1; // Corrected to decrement the value
    },

    // ! Add by 5
    incrementByAmount: (state, action) => {
      state.value += action.payload; // Now uses payload to increment
    },
  },
});

// Phir inko export kr diya
export const { increment, decrement, incrementByAmount } =
  counterReducer.actions;

// async function call

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    //  is tarha hamne dispatch kr liya pass krne ke liye main component me
    dispatch(incrementByAmount(amount));
  }, 2000);
};

export default counterReducer.reducer;
