import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserActionCreator } from "../store/actions/userAction";
import { FETCH_STATES } from "../store/reducers/productReducer";
import { Spinner } from "@material-tailwind/react";
import md5 from "blueimp-md5";
import { Link } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });

  const rememberMe = watch("rememberMe");

  const userLoading = useSelector(
    (store) => store.user.fetchState === FETCH_STATES.Fetching
  );

  const userLoaded = useSelector(
    (store) => store.user.fetchState === FETCH_STATES.Fetched
  );

  const user = useSelector((state) => state.user.userInfo);

  const onFormSubmit = (formData) => {
    dispatch(fetchUserActionCreator(formData));
  };

  if (userLoaded) {
    history.push("/");
  }

  const gravatarUrl = user
    ? `https://www.gravatar.com/avatar/${md5(user.email)}?s=200&d=retro`
    : "";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <ToastContainer/>
      <div className="shadow-xl shadow-blue-gray-300 border-light-green-50 flex flex-col justify-center items-center gap-4 py-28 m-10">
        {/* anasayfa icon */}
        <Link to="/" className="absolute top-6 left-6 text-2xl text-blue-600 hover:text-blue-800">
          🏠
        </Link>
        </div>
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-3xl p-10 space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <i className="bx bx-lock text-5xl text-white bg-primary-color p-4 rounded-full shadow-md"></i>
          <div className="flex justify-center gap-10">
            <NavLink
              to="/login"
              className="text-xl font-semibold text-gray-600 hover:text-primary-color underline transition"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="text-xl font-semibold text-gray-600 hover:text-primary-color underline transition"
            >
              Sign Up
            </NavLink>
          </div>
        </div>

        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2">E-mail</label>
            <input
              autoFocus
              placeholder="E-mail"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-color transition"
              type="email"
              {...register("email", {
                required: "Email is required!",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Email is not valid",
                },
              })}
            />
            <p className="text-sm text-red-600 mt-1">{errors.email?.message}</p>
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">Password</label>
            <input
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-color transition"
              type="password"
              {...register("password", {
                required: "Password is required.",
              })}
            />
            <p className="text-sm text-red-600 mt-1">{errors.password?.message}</p>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              {...register("rememberMe")}
              className="mr-2 rounded"
            />
            <label className="text-sm text-gray-700">Remember me</label>
          </div>

          <button
            className="w-full bg-primary-color text-white py-3 rounded-xl text-lg font-semibold hover:bg-[#23a5f0] transition duration-300 flex justify-center items-center"
            type="submit"
            formNoValidate="formnovalidate"
          >
            {userLoading ? <Spinner /> : "Sign In"}
          </button>
        </form>

        {user && (
          <div className="flex justify-center mt-6">
            <img
              src={gravatarUrl}
              alt="User Avatar"
              className="w-20 h-20 rounded-full border-4 border-primary-color shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}
