import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";
import { fetchDataFromApi } from "../utils/api";

export const fetchItems = createAsyncThunk("fetchItems", async () => {
  const data = await fetchDataFromApi("/items");
  return data;
});

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menuItems: [],
    loading: false,
    error: null,
  
  },
  reducers: {
    addItem: (state, action) => {
      state.menuItems = action.payload;
    },
    removeItem: (state, action) => {
      state.menuItems.pop();
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.loading = false;
      state.menuItems = action.payload;
    });
    builder.addCase(fetchItems.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      console.log(error);
      state.error = true;
    });
  },
});

export const { addItem, removeItem } = menuSlice.actions;

export default menuSlice.reducer;
