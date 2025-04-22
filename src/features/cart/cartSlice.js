import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
  cartList: JSON.parse(localStorage.getItem("cartList")) || [],  
  totalAmount: 0,
  totalQuantity: 0,
};

const calculateTotalsFn = (cartList) => {
  let totalAmount = 0;
  let totalQuantity = 0;
  cartList.forEach((item) => {
    if (item.checked) {
      totalAmount += item.price * item.productQuantity;
      totalQuantity += item.productQuantity;
    }
  });
  return { totalAmount, totalQuantity };
};

export const selectTotals = createSelector(
  [(state) => state.cart?.cartList || []],
  (cartList) => calculateTotalsFn(cartList)
);

export const selectCartList = (state) => state.cart.cartList;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartList.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.productQuantity += 1;
      } else {
        state.cartList.push({ ...newItem, productQuantity: 1, checked: false });
      }

      const { totalAmount, totalQuantity } = calculateTotalsFn(state.cartList);
      state.totalAmount = totalAmount;
      state.totalQuantity = totalQuantity;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartList = state.cartList.filter((item) => item.id !== id);

      saveCartToLocalStorage(state.cartList);

      const { totalAmount, totalQuantity } = calculateTotalsFn(state.cartList);
      state.totalAmount = totalAmount;
      state.totalQuantity = totalQuantity;
    },

    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cartList.find((item) => item.id === id);
      if (item) item.productQuantity += 1;

      saveCartToLocalStorage(state.cartList);

      const { totalAmount, totalQuantity } = calculateTotalsFn(state.cartList);
      state.totalAmount = totalAmount;
      state.totalQuantity = totalQuantity;
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cartList.find((item) => item.id === id);
      if (item && item.productQuantity > 1) {
        item.productQuantity -= 1;
      }

      saveCartToLocalStorage(state.cartList);

      const { totalAmount, totalQuantity } = calculateTotalsFn(state.cartList);
      state.totalAmount = totalAmount;
      state.totalQuantity = totalQuantity;
    },

    toggleChecked: (state, action) => {
      const { id, checked } = action.payload;
      const item = state.cartList.find((item) => item.id === id);
      if (item) {
        item.checked = checked;
      }

      saveCartToLocalStorage(state.cartList);

      const { totalAmount, totalQuantity } = calculateTotalsFn(state.cartList);
      state.totalAmount = totalAmount;
      state.totalQuantity = totalQuantity;
    },

    clearCart: (state) => {
      state.cartList = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;

      localStorage.removeItem("cartList");
    },

    updateTotals: (state) => {
      const { totalAmount, totalQuantity } = calculateTotalsFn(state.cartList);
      state.totalAmount = totalAmount;
      state.totalQuantity = totalQuantity;
    },
  },
});


export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  toggleChecked,
  clearCart,
  updateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;

const saveCartToLocalStorage = (cartList) => {
  localStorage.setItem("cartList", JSON.stringify(cartList));
};

