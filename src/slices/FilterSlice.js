import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filters",
  initialState: {
    price: 0,
    category: null,
  },
  reducers: {
    setPriceFilter: (state, action) => {
      state.price = action.payload;
    },
    setCategoryFilter: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const {setPriceFilter, setCategoryFilter} = filterSlice.actions;

export default filterSlice.reducer;
