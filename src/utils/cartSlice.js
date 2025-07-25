import { createSlice } from "@reduxjs/toolkit";

//here we are creating a slice
const cartSlice = createSlice({
  //this is the name of the slice
  name: "cart",
  //this is the initial state
  initialState: {
    items: [],
  },
  //this is the reducer. which is used to update the state. It contains the actions.
  reducers: {
    // these actions are used to update the state. takes two arguments state and action.
    addItems: (state, action) => {
      //here we are mutating the state.
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItems, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
