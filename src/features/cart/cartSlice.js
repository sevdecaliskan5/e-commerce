import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const calculateTotalsFn = (state) => {
  let totalAmount = 0;
  let totalQuantity = 0;
  state.cartList.forEach(item => {
    if (item.checked) {
      totalAmount += item.price * item.productQuantity;
      totalQuantity += item.productQuantity;
    }
  });
  state.totalAmount = totalAmount;
  state.totalQuantity = totalQuantity;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartList.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.productQuantity += 1;
      } else {
        state.cartList.push({ ...newItem, productQuantity: 1, checked: true });
      }
      calculateTotalsFn(state);
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartList = state.cartList.filter(item => item.id !== id);
      calculateTotalsFn(state);
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cartList.find(item => item.id === id);
      if (item) item.productQuantity += 1;
      calculateTotalsFn(state);
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cartList.find(item => item.id === id);
      if (item && item.productQuantity > 1) {
        item.productQuantity -= 1;
      }
      calculateTotalsFn(state);
    },
    toggleChecked: (state, action) => {
      const { id, checked } = action.payload;
      const item = state.cartList.find(item => item.id === id);
      if (item) {
        item.checked = checked;
      }
      calculateTotalsFn(state);
    },
    calculateTotals: calculateTotalsFn,
    clearCart: (state) => {
      state.cartList = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  toggleChecked,
  calculateTotals,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;


