import { combineReducers } from "redux";
import { globalReducer } from "./globalReducer";
import { productReducer } from "./productReducer";
import cartReducer from "../../features/cart/cartSlice";
import authReducer from "../../features/auth/authSlice";
import favoritesReducer from "../../features/favorites/favoritesSlice";

export const reducers = combineReducers({
  global: globalReducer,
  product: productReducer,
  cart: cartReducer,
  auth: authReducer,
  favorites: favoritesReducer,
});
