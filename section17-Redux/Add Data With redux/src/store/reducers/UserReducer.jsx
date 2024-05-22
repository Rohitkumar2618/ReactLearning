import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  users: [],
};

// Main synchronous function
export const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getusers: (state, action) => {

      state.users = action.payload;
    },

    
  },
});

export default UserSlice.reducer;

export const { getusers } = UserSlice.actions;
