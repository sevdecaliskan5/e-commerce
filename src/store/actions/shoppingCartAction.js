import { toast } from "react-toastify";
import { API } from "../../api/api";

export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const FETCH_ADDRESS = "FETCH_ADDRESS";
export const SELECTED_ADDRESS = "SELECTED_ADDRESS";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const ADD_CREDIT_CARD = "ADD_CREDIT_CARD";

export const setPaymentAction = (payment) => {
  return { type: SET_PAYMENT, payload: payment };
};

export const setAddressAction = (address) => {
  return { type: SET_ADDRESS, payload: address };
};

export const fetchAddresAction = (addresses) => {
  return { type: FETCH_ADDRESS, payload: addresses };
};

export const setSelectedAddress = (id) => {
  return { type: SELECTED_ADDRESS, payload: id };
};

export const UpdateAddressAction = (id) => {
  return { type: UPDATE_ADDRESS, payload: id };
};

export const setAddressThunkAction = (formData) => (dispatch) => {
  API.post("user/address", formData)
    .then((res) => {
      toast.success("Adress başarılı bir şekilde kaydedildi!");
    })
    .catch((err) => {
      console.error(err);
      toast.error("Adress kaydedilirken bir hata ile karşılaşıldı!");
    });
};

export const fetchAddressThunkAction = () => (dispatch) => {
  API.get("user/address")
    .then((res) => dispatch(setAddressAction(res.data)))
    .catch((err) => {
      console.error(err);
      toast.error("Adres çekilemedi bir hata ile karşılaşıldı!");
    });
};

export const addCreditCardThunkAction = (addedCard) => (dispatch) => {
  API.post("card", addedCard)
    .then((res) => {
      toast.success("Kart başarılı bir şekilde kaydedildi!");
    })
    .catch((err) => {
      console.error(err);
      toast.error("Kart kaydedilirken bir hata ile karşılaşıldı!");
    });
};

export const fetchCreditCardThunkAction = () => (dispatch) => {
  API.get("card")
    .then((res) => {
      dispatch({ type: ADD_CREDIT_CARD, payload: res.data });
    })
    .catch((err) => {
      console.error(err);
      toast.error("Kart bilgileri çekilemedi!");
    });
};