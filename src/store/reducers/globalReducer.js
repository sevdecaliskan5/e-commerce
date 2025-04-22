import {
  SET_ROLES,
  SET_CATEGORY,
  CHANGE_THEME,
  CHANGE_LANGUAGE,
} from "../actions/globalAction";

const initialState = {
  roles: [],
  categories: [],
  theme: "light",
  language: "tr",
};

export const globalReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ROLES:
      return { ...state, roles: payload };

    case SET_CATEGORY:
      return { ...state, categories: payload };

    case CHANGE_THEME:
      return { ...state, theme: payload };

    case CHANGE_LANGUAGE:
      return { ...state, language: payload };

    default:
      return state;
  }
};
