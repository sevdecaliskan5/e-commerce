import { createSlice } from "@reduxjs/toolkit";

const FETCH_STATES = {
  NotFetched: "not_fetched",
  Fetching: "fetching",
  Fetched: "fetched",
};

const initialState = {
  userInfo: null,
  fetchState: FETCH_STATES.NotFetched,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      state.fetchState = FETCH_STATES.Fetched;
    },
    clearUserInfo: (state) => {
      state.userInfo = null;
      state.fetchState = FETCH_STATES.NotFetched;
    },
    setAuthFetchState: (state, action) => {
      state.fetchState = action.payload;
    },
  },
});

export const { setUserInfo, clearUserInfo, setAuthFetchState } = authSlice.actions;
export const FETCH_STATES_ENUM = FETCH_STATES;

export default authSlice.reducer;
