import { API } from "../../api/api";

export const SET_ROLES = "SET_ROLES";
export const SET_CATEGORY = "SET_CATEGORY";
export const CHANGE_THEME = "CHANGE_THEME";
export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

export const changeThemeAction = (theme) => {
  return { type: CHANGE_THEME, payload: theme };
};

export const changeLanguageAction = (language) => {
  return { type: CHANGE_LANGUAGE, payload: language };
};

export const fetchRolesActionCreator = () => (dispatch) => {
    API.get("roles")
      .then((res) => {
        dispatch({ type: SET_ROLES, payload: res.data.reverse() });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_FAILED", payload: err.message });
        console.error(err);
      });
  };
  

export const fetchCategoryActionCreator = () => (dispatch) => {
  API.get("categories")
    .then((res) => {
      dispatch({ type: SET_CATEGORY, payload: res.data });
    })
    .catch((err) => {
      console.error(err);
    });
};