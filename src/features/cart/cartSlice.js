import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // {id, title, price, qty}
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.items.find(i => i.id === product.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...product, qty: 1 });
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter(i => i.id !== id);
    },
    incrementQty(state, action) {
      const id = action.payload;
      const it = state.items.find(i => i.id === id);
      if (it) it.qty += 1;
    },
    decrementQty(state, action) {
      const id = action.payload;
      const it = state.items.find(i => i.id === id);
      if (it && it.qty > 1) it.qty -= 1;
    },
    clearCart(state) {
      state.items = [];
    }
  }
});

export const { addToCart, removeFromCart, incrementQty, decrementQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
