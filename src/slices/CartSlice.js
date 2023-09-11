import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.name === action.payload.name
      );
      if (item) {
        item.quantity = action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      const { id, quantity } = action.payload;

      const item = state.cartItems.find((item) => item.id == id);

      if (item != null && quantity > 0) {
        item.quantity = quantity;
      }
      if (item != null && quantity == 0) {
        let newCartItems = state.cartItems.filter(
          (cartItem) => cartItem != item
        );
        state.cartItems = newCartItems;
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
