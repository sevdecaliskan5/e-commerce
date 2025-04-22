import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryActionCreator } from "../store/actions/globalAction";
import { selectTotals } from "../features/cart/cartSlice";
import { FETCH_STATES_ENUM } from "../features/auth/authSlice";
import MD5 from "crypto-js/md5";

const HomeHeader = () => {
  const dispatch = useDispatch();
  const [visibleItem, setVisibleItem] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { search } = useLocation();
  const { totalAmount, totalQuantity } = useSelector(selectTotals);

  const { userInfo, fetchState } = useSelector((state) => state.auth);

  const categories = useSelector((state) => {
    console.log("Tüm Redux state:", state);
    return state.global?.categories || [];
  });

  const womanCategories = categories.filter((category) =>
    category.code.includes("k:")
  );
  const manCategories = categories.filter((category) =>
    category.code.includes("e:")
  );

  useEffect(() => {
    dispatch(fetchCategoryActionCreator());
  }, [dispatch]);

  return (
    <div className="bg-white">
      <div className="py-6 sm:w-[90rem] m-auto">
        <div className="max-w-[1322px] mx-auto flex justify-between items-center px-6 py-2 text-sm text-[#292929]">
          <NavLink
            to="/"
            className={`${
              !visibleItem ? "flex" : "hidden sm:flex"
            } text-xl font-bold`}
          >
            Bandage
          </NavLink>

          <div className="flex gap-4 items-center text-gray-700">
            <NavLink to="/">Home</NavLink>
            <div className="flex items-center relative">
              <NavLink to="/shopping">Shop</NavLink>
              <button
                onClick={() => setToggle(!toggle)}
                className="inline-flex items-center"
              >
                <svg
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {toggle && (
                <div className="absolute z-10 mt-2 w-[300px] bg-white shadow-lg">
                  <div className="py-4 px-6 grid grid-cols-2">
                    <div>
                      <p className="text-lg mb-2">Kadın</p>
                      {womanCategories.map((category) => (
                        <NavLink
                          key={category.id}
                          to={`/shopping/kadin/${category.code.slice(2)}${search}`}
                          className="block py-1 text-sm hover:underline"
                          onClick={() => setToggle(false)}
                        >
                          {category.title}
                        </NavLink>
                      ))}
                    </div>
                    <div>
                      <p className="text-lg mb-2">Erkek</p>
                      {manCategories.map((category) => (
                        <NavLink
                          key={category.id}
                          to={`/shopping/erkek/${category.code.slice(2)}${search}`}
                          className="block py-1 text-sm hover:underline"
                          onClick={() => setToggle(false)}
                        >
                          {category.title}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/team">Team</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
          </div>

          <div className="flex items-center gap-4 text-black sm:text-primary-color font-light">
            {fetchState === "NotFetched" && (
              <div className="flex">
                <NavLink to="/login" className="text-[#23a6f0]">Login -</NavLink>
                <NavLink to="/signup" className="text-[#23a6f0]">Register</NavLink>
              </div>
            )}

            <div className="relative">
              <input
                type="text"
                name="searchingItem"
                className={`border border-gray-300 bg-[#F5F5F5] text-lg text-black p-2 rounded-sm transition-all duration-200 ${
                  visibleItem ? "w-64 opacity-100" : "w-0 opacity-0"
                }`}
                placeholder="Search"
              />
              <button
                onClick={() => setVisibleItem(!visibleItem)}
                className="absolute right-0 top-0 h-full text-gray-600 hover:text-black"
              >
                <i className="bx bx-search text-2xl font-bold"></i>
              </button>
            </div>

            <NavLink to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 hover:text-[#23a6f0] transition-colors duration-200" />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#23a6f0] text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
                  {totalQuantity}
                </span>
              )}
            </NavLink>

            <NavLink to="/favorites">
              <Heart className="w-6 h-6 hover:text-[#23a6f0] transition-colors duration-200" />
            </NavLink>

            {fetchState === "Fetched" && userInfo?.email && (
              <img
                className="rounded-full w-9 h-9 object-cover border border-gray-300"
                src={`https://www.gravatar.com/avatar/${MD5(userInfo.email)}?s=35`}
                alt="User"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;





