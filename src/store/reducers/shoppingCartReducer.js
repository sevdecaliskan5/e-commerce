import {
  SET_PAYMENT,
  SET_ADDRESS,
  SELECTED_ADDRESS,
  UPDATE_ADDRESS,
  ADD_CREDIT_CARD,
} from "../actions/shoppingCartAction";

const shoppingCart = {
  payment: {},
  address: [],
  selectedAddress: {},
  updateAddress: {},
  creditCard: [],
};

export const shoppingCartReducer = (state = shoppingCart, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_PAYMENT:
      return { ...state, payment: payload };

    case SET_ADDRESS:
      return { ...state, address: payload };

    case ADD_CREDIT_CARD:
      return { ...state, creditCard: payload };

    case SELECTED_ADDRESS:
      return {
        ...state,
        selectedAddress: state.address.find((a) => a.id === Number(payload)),
      };

    case UPDATE_ADDRESS:
      return {
        ...state,
        updateAddress: state.address.find((a) => a.id === Number(payload)),
      };

    default:
      return state;
  }
};
