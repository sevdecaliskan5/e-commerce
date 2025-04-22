import { configureStore } from "@reduxjs/toolkit";
import { reducers as combinedReducers } from "./reducers";

export const store = configureStore({
  reducer: combinedReducers,
});
