import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_STATES } from "../store/reducers/productReducer";
import { fetchCategoryActionCreator } from "../store/actions/globalAction";
import { calculateTotals } from "../features/cart/cartSlice";
import MD5 from "crypto-js/md5";

const HomeHeader = () => {
  const dispatch = useDispatch();
  const [visibleItem, setVisibleItem] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { search } = useLocation();

  const userInfo = useSelector((store) => store.user.userInfo);
  const userNotFetched = useSelector(
    (store) => store.user.fetchState === FETCH_STATES.NotFetched
  );
  const userFetched = useSelector(
    (store) => store.user.fetchState === FETCH_STATES.Fetched
  );
  const categories = useSelector((store) => store.global.categories);
  const cartProducts = useSelector((store) => store.shoppingCart.cartList);
  const { totalQuantity } = useSelector((store) => store.shoppingCart);

  useEffect(() => {
    dispatch(fetchCategoryActionCreator());
  }, []);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartProducts]);

  const womanCategories = categories.filter((category) =>
    category.code.includes("k:")
  );
  const manCategories = categories.filter((category) =>
    category.code.includes("e:")
  );

  return (
    <div className="bg-white">
      <div className="py-6 sm:w-[90rem] m-auto">
        <div className="max-w-[1322px] mx-auto flex justify-between items-center px-6 py-2 text-sm text-[#292929]">

          <NavLink
            to="/"
            exact
            className={`${
              !visibleItem ? "flex" : "hidden sm:flex"
            } text-xl font-bold`}
          >
            Bandage
          </NavLink>

          <div className="flex gap-4 items-center text-gray-700">
            <NavLink to="/" exact>Home</NavLink>
            <div className="flex items-center">
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
                        >
                          {category.title}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <NavLink to="/about" exact>About</NavLink>
            <NavLink to="/blog" exact>Blog</NavLink>
            <NavLink to="/contact" exact>Contact</NavLink>
            <NavLink to="/team" exact>Team</NavLink>
            <NavLink to="/pricing" exact>Pricing</NavLink>
          </div>

          <div className="flex items-center gap-2 text-black sm:text-primary-color font-light">
            {userNotFetched && (
              <div className="flex">
                <NavLink to="/login" className="text-[#23a6f0]">Login -</NavLink>
                <NavLink to="/signup" className="text-[#23a6f0]">Register</NavLink>
              </div>
            )}

            <input
              type="text"
              name="searchingItem"
              className="border bg-[#F5F5F5] text-black p-2 sm:w-72"
              placeholder="Search"
              hidden={!visibleItem}
            />

            <button onClick={() => setVisibleItem(!visibleItem)}>
              <i className="bx bx-search text-2xl"></i>
            </button>

            <NavLink to="/cart" exact hidden={visibleItem}>
              <ShoppingCart className="text-2xl" />
              {totalQuantity > 0 && <p>{totalQuantity}</p>}
            </NavLink>

            <NavLink to="/favorites" exact hidden={visibleItem}>
              <Heart className="text-2xl" />
            </NavLink>

            {userFetched && (
              <img
                className="rounded-full"
                src={`https://www.gravatar.com/avatar/${MD5(userInfo.email)}?s=35`}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
