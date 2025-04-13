import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { setCountPege } from './filterSlice';

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasId',
  async params => {
    const { sortBy, order, categoryId, search, currentPage } = params;
    const { data } = await axios.get(
      `https://657e1dcb3e3f5b18946387a8.mockapi.io/advert?page=${currentPage}&limit=4&${categoryId}&sortBy=${sortBy}&order=${order}&${search}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: 'loading',
};

export const pizzasSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: builder => {
    builder

      .addCase(fetchPizzas.pending, state => {
        state.status = 'loading';
        state.items = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'success';
      })
      .addCase(fetchPizzas.rejected, state => {
        state.status = 'error';
        state.items = [];
      });
  },
});

export const selectPizza = state => state.pizza;
export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
