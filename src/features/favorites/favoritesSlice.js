import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteList: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const newItem = action.payload;
      const exists = state.favoriteList.some(item => item.id === newItem.id);
      if (!exists) {
        state.favoriteList.push(newItem);
      }
    },

    removeFromFavorites: (state, action) => {
      const idToRemove = action.payload;
      state.favoriteList = state.favoriteList.filter(item => item.id !== idToRemove);
    },

    toggleFavorite: (state, action) => {
      const item = action.payload;
      const exists = state.favoriteList.some(fav => fav.id === item.id);

      if (exists) {
        state.favoriteList = state.favoriteList.filter(fav => fav.id !== item.id);
      } else {
        state.favoriteList.push(item);
      }
    },

    clearFavorites: (state) => {
      state.favoriteList = [];
    },
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  toggleFavorite,
  clearFavorites,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;

