import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,

  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addProduct(state, action) {
    //   state.items.push(action.payload);
    //   state.totalPrice = state.items.reduce((sum, obj) => {
    //     return obj.price + sum;
    //   }, 0);
    // },
    addProduct(state, action) {
      const findItem = state.items.find(obj => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    minusProduct(state, action) {
      const findItem = state.items.find(obj => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
    },
    removeProduct(state, action) {
      state.items = state.items.filter(obj => obj.id !== action.payload);
    },
    cleareProduct(state) {
      state.items = [];
      state.totalPrice = null;
    },
  },
});

export const selectCart = state => state.cart;
export const selectCartItem = id => state =>
  state.cart.items.find(obj => obj.id === id);

export const { addProduct, minusProduct, removeProduct, cleareProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
