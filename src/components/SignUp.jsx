import { useForm } from "react-hook-form";
import { Spinner } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { fetchRolesActionCreator } from "../store/actions/globalAction";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../api/api";
import { Link } from "react-router-dom";

const Signup = () => {
  const [sellerRole, setSellerRole] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const dispatch = useDispatch();
  const roles = useSelector((store) => store.global.roles);
  const push = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role_id: "3",
      store: { name: "", tax_no: "", bank_account: "" },
    },
    mode: "onChange",
  });

  const onFormSubmit = (formData) => {
    let postData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role_id: formData.role_id,
    };

    if (formData.role_id === "2") {
      postData.store = {
        name: formData.store.name,
        tax_no: formData.store.tax_no,
        bank_account: formData.store.bank_account,
      };
    }

    setSpinner(true);
    API.post("signup", postData)
      .then((res) => {
        toast(res.data.message);
        setTimeout(() => {
          push.push("/login");
        }, 2000);
      })
      .catch(() => {
        setSpinner(false);
        toast.error("Kayıt olurken bir hata oluştu!");
      });
  };

  const changeOptionHandle = (e) => {
    setSellerRole(e.target.value === "2");
  };

  useEffect(() => {
    dispatch(fetchRolesActionCreator());
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <ToastContainer />
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
            <label className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              autoFocus
              placeholder="Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-color transition"
              {...register("name", {
                required: "Name is required!",
                minLength: {
                  value: 3,
                  message: "At least 3 characters",
                },
              })}
            />
            <p className="text-sm text-red-600 mt-1">{errors.name?.message}</p>
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">E-mail</label>
            <input
              placeholder="E-mail"
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-color transition"
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
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-color transition"
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 8,
                  message: "Must be at least 8 characters",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/,
                  message: "Include upper, lower, number, and special char.",
                },
              })}
            />
            <p className="text-sm text-red-600 mt-1">{errors.password?.message}</p>
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-color transition"
              {...register("confirmPassword", {
                required: "Confirmation is required.",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match!",
              })}
            />
            <p className="text-sm text-red-600 mt-1">{errors.confirmPassword?.message}</p>
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">Role</label>
            <select
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-color transition"
              {...register("role_id")}
              onChange={changeOptionHandle}
            >
              {roles?.map((roleData) => (
                <option key={roleData.id} value={roleData.id}>
                  {roleData.name}
                </option>
              ))}
            </select>
          </div>

          {sellerRole && (
            <>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Store Name</label>
                <input
                  placeholder="Store Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-color transition"
                  {...register("store.name", {
                    required: "Store name is required!",
                    minLength: {
                      value: 3,
                      message: "Minimum 3 characters",
                    },
                  })}
                />
                <p className="text-sm text-red-600 mt-1">{errors.store?.name?.message}</p>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Tax ID</label>
                <input
                  placeholder="TXXXXVXXXXXX"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-color transition"
                  {...register("store.tax_no", {
                    required: "Tax ID is required!",
                    pattern: {
                      value: /^T\d{4}V\d{6}$/,
                      message: "Invalid TAX ID",
                    },
                  })}
                />
                <p className="text-sm text-red-600 mt-1">{errors.store?.tax_no?.message}</p>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">IBAN</label>
                <input
                  placeholder="TRXXXXXXXXXXXXXXXXXXXXXXXX"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-color transition"
                  {...register("store.bank_account", {
                    required: "IBAN is required!",
                    pattern: {
                      value: /^TR\d{2}[0-9A-Z]{22}$/,
                      message: "Invalid IBAN",
                    },
                  })}
                />
                <p className="text-sm text-red-600 mt-1">
                  {errors.store?.bank_account?.message}
                </p>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-primary-color text-white py-3 rounded-xl text-lg font-semibold hover:bg-[#23a5f0] transition duration-300 flex justify-center items-center"
            disabled={spinner}
          >
            {spinner ? <Spinner /> : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
