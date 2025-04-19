import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import favoritesReducer from "../features/favorites/favoritesSlice";
import cartReducer from "../features/cart/cartSlice";


export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
});
