import { toast } from "react-toastify";
import { FETCH_STATES } from "../reducers/productReducer";
import { API, renewAPI } from "../../api/api";

export const SET_USER = "SET_USER";
export const SET_USER_FETCH_STATE = "SET_USER_FETCH_STATE";

export const fetchUserActionCreator =
  (userFormData) => (dispatch, getState) => {
    if (getState().user.fetchState === FETCH_STATES.NotFetched) {
      dispatch({ type: SET_USER_FETCH_STATE, payload: FETCH_STATES.Fetching });
      API.post("login", userFormData)
        .then((res) => {
          // Kullanıcı verilerini ve token'ı redux store'a dispatch et
          dispatch({ type: SET_USER, payload: res.data });

          // Token'ı localStorage'a kaydet
          localStorage.setItem("token", res.data.token);

          // Token'ı API'de geçerli kılmak için yenile
          renewAPI(res.data.token);

          // Kullanıcıya başarı mesajı göster
          toast.success(res.data.message);
          dispatch({
            type: SET_USER_FETCH_STATE,
            payload: FETCH_STATES.Fetched,
          });
        })
        .catch((err) => {
          dispatch({
            type: SET_USER_FETCH_STATE,
            payload: FETCH_STATES.FetchFailed,
          });
          console.error(err);
          toast.warning(err.response.data.message);
        });
    }
  };

export const getUserVerifyAction = () => (dispatch) => {
  const token = localStorage.getItem("token");  // Burada token'ı localStorage'dan alıyoruz
  if (token) {
    // Eğer token varsa, verify isteğiyle kullanıcının doğruluğunu kontrol et
    API.get("verify", {
      headers: {
        Authorization: `Bearer ${token}`, // Token'ı header'a ekliyoruz
      },
    })
      .then((res) => {
        // Kullanıcı doğrulandıysa, veriyi Redux'a kaydet
        dispatch({ type: SET_USER, payload: res.data });
        dispatch({
          type: SET_USER_FETCH_STATE,
          payload: FETCH_STATES.Fetched,
        });
        renewAPI(res.data.token);
      })
      .catch((err) => {
        console.error("verifythunaction error:", err);
        localStorage.removeItem("token");
        dispatch({
          type: SET_USER_FETCH_STATE,
          payload: FETCH_STATES.FetchFailed,
        });
        renewAPI();
      });
  } else {
    // Token yoksa, kullanıcıyı giriş sayfasına yönlendir
    console.log("No token found.");
  }
};
