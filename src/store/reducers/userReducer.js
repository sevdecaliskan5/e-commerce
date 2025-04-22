import { FETCH_STATES } from "./productReducer"; 
const initialState = {
  fetchState: FETCH_STATES.NotFetched,
  userInfo: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_USER_START":
      return { ...state, fetchState: FETCH_STATES.Fetching };
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        fetchState: FETCH_STATES.Fetched,
        userInfo: action.payload,
      };
    case "FETCH_USER_ERROR":
      return { ...state, fetchState: FETCH_STATES.Error };
    default:
      return state;
  }
}
