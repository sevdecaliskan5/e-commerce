import { API } from "../../api/api";
import { FETCH_STATES } from "../reducers/productReducer";

export const SET_PRODUCT = "SET_PRODUCT";
export const SET_ACTIVEPAGE = "SET_ACTIVEPAGE";
export const ADD_PAGECOUNT = "ADD_PAGECOUNT";
export const DELETE_PAGECOUNT = "DELETE_PAGECOUNT";
export const CHANGE_FETCH_STATE = "CHANGE_FETCH_STATE ";
export const SET_PAGECOUNT = "SET_PAGECOUNT ";
export const REMOVE_COUNT = "REMOVE_COUNT ";
export const SET_SEARCH = "SET_SEARCH ";
export const SET_FILTER = "SET_FILTER ";
export const SET_TOTALPRODUCTS = "SET_TOTALPRODUCTS ";
export const PRODUCT_COUNT = "PRODUCT_COUNT ";
export const ADD_PRODUCTS = "ADD_PRODUCTS ";

export const setActivePageAction = (page) => {
  return { type: SET_ACTIVEPAGE, payload: page };
};

export const changeFetchStateAction = (fetchState) => {
  return { type: CHANGE_FETCH_STATE, payload: fetchState };
};

export const setProductCount = (productCount) => {
  return { type: PRODUCT_COUNT, payload: productCount };
};

export const fetchProductActionCreator = (params) => (dispatch, getState) => {
  console.log("params:", params);

  dispatch(changeFetchStateAction(FETCH_STATES.Fetching));
  API.get("products", { params })
    .then((res) => {
      dispatch({ type: SET_PRODUCT, payload: res.data.products });
      dispatch({ type: SET_TOTALPRODUCTS, payload: res.data.total });
      dispatch({
        type: SET_PAGECOUNT,
        payload: Math.ceil(res.data.total / 25),
      });
      dispatch(changeFetchStateAction(FETCH_STATES.Fetched));
    })
    .catch((err) => {
      dispatch(changeFetchStateAction(FETCH_STATES.FetchFailed));
      console.error(err);
    });
};

export const scrollingAddProducts = (params) => (dispatch) => {
  dispatch(changeFetchStateAction(FETCH_STATES.Fetching));
  API.get("products", { params })
    .then((res) => {
      dispatch({ type: ADD_PRODUCTS, payload: res.data.products });
      dispatch({ type: SET_TOTALPRODUCTS, payload: res.data.total });
      dispatch(changeFetchStateAction(FETCH_STATES.Fetched));
    })
    .catch((err) => {
      dispatch(changeFetchStateAction(FETCH_STATES.FetchFailed));
      console.error(err);
    });
};