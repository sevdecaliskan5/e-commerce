import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
import MD5 from "crypto-js/md5";
import { fetchCategoryActionCreator } from "../store/actions/globalAction";
import { useLocation } from "react-router-dom";
import {
  setTotalPriceAction,
  setTotalQuantityAction,
} from "../store/actions/shoppingCartAction";

const HomeHeader = () => {
  const dispatch = useDispatch();
  const [visibleItem, setVisibleItem] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const { search } = useLocation();

  const userInfo = useSelector((store) => store.user.userInfo);

  const userNotFetched = useSelector(
    (store) => store.user.fetchState === FETCH_STATES.NotFetched
  );
  const userFetched = useSelector(
    (store) => store.user.fetchState === FETCH_STATES.Fetched
  );

  useEffect(() => {
    dispatch(fetchCategoryActionCreator());
  }, []);
  const categories = useSelector((store) => store.global.categories);

  const womanCategories = categories.filter((category) =>
    category.code.includes("k:")
  );
  const manCategories = categories.filter((category) =>
    category.code.includes("e:")
  );
  const clickHandle = (e) => {};
  const cartProducts = useSelector((store) => store.shoppingCart.cartList);

  useEffect(() => {
    dispatch(setTotalQuantityAction());
  }, [cartProducts]);

  const { totalQuantity } = useSelector((store) => store.shoppingCart);

  return (
    <div className="bg-white">
      <div className="py-6 sm:w-[90rem] m-auto">
        <div className="max-w-[1322px] mx-auto flex justify-between items-center px-6 py-2 text-sm text-[#292929]">
          <div>
            <NavLink
              to="/"
              exact
              className={`${
                !visibleItem ? "flex" : "hidden sm:flex"
              } text-xl font-bold`}
            >
              Bandage
            </NavLink>
          </div>
          <div className="flex gap-4 items-center text-gray-700">
            <NavLink to="/" className="" activeClassName="text-black" exact>
              Home
            </NavLink>
            <div className="flex items-center">
              <NavLink to="/shopping" className="" activeClassName="text-black">
                Shop
              </NavLink>
              <div className="relative inline-block text-left">
                <div className="flex items-center">
                  <button
                    onClick={() => setToggle(!toggle)}
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-white text-sm text-second-text font-light hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    <svg
                      className="-mr-1 h-10 w-10 sm:h-5 sm:w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                {toggle && (
                  <div
                    className="absolute left-0 z-10 mt-2 w-[300px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                  >
                    <div
                      className="py-4 px-6 grid grid-cols-2"
                      role="none"
                    >
                      <div>
                        <p className="font-light text-black text-lg mb-2">
                          Kadın
                        </p>
                        {womanCategories.map((category) => (
                          <NavLink
                            key={category.id}
                            to={`/shopping/kadin/${category.code.slice(
                              2
                            )}${search}`}
                            className="text-gray-700 block py-1 text-sm hover:underline"
                            role="menuitem"
                            onClick={() => setToggle(false)}
                          >
                            {category.title}
                          </NavLink>
                        ))}
                      </div>
                      <div>
                        <p className="font-light text-black text-lg mb-2">
                          Erkek
                        </p>
                        {manCategories.map((category) => (
                          <NavLink
                            key={category.id}
                            to={`/shopping/erkek/${category.code.slice(
                              2
                            )}${search}`}
                            className="text-gray-700 block py-1 text-sm hover:underline"
                            role="menuitem"
                            onClick={clickHandle}
                          >
                            {category.title}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <NavLink
              to="/about"
              className=""
              activeClassName="text-black"
              exact
            >
              About
            </NavLink>
            <NavLink to="/blog" className="" activeClassName="text-black" exact>
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className=""
              activeClassName="text-black"
              exact
            >
              Contact
            </NavLink>
            <NavLink to="/team" className="" activeClassName="text-black" exact>
              Team
            </NavLink>
            <NavLink to="/pricing" activeClassName="text-black" exact>
              Pricing
            </NavLink>
          </div>
          <div className="flex items-center gap-2 text-black sm:text-primary-color font-light">
            {userNotFetched && (
              <div className="flex">
                <i
                  className={`${
                    !visibleItem ? "flex" : "hidden sm:flex"
                  } hidden sm:flex bx bx-user px-2 text-[#23a6f0] text-2xl `}
                ></i>
                <NavLink
                  to="/login"
                  exact
                  className={`${
                    !visibleItem ? "flex" : "flex sm:hidden "
                  } font-light text-lg sm:px-0 hidden sm:flex items-center text-[#23a6f0]`}
                >
                  Login -
                </NavLink>
                <NavLink
                  to="/signup"
                  exact
                  className={`${
                    !visibleItem ? "flex" : "flex sm:hidden "
                  } font-light text-lg sm:px-0 px-2 hidden sm:flex items-center text-[#23a6f0]`}
                >
                  Register
                </NavLink>
              </div>
            )}

            <input
              type="text"
              name="searchingItem"
              className="border border-[#DADADA] rounded-md bg-[#F5F5F5] text-black p-2 sm:w-72"
              placeholder="Search"
              hidden={!visibleItem}
            ></input>

            <button
              onClick={() => setVisibleItem(!visibleItem)}
              className="flex items-center "
            >
              <i className="bx bx-search text-2xl"></i>
            </button>

            <NavLink
              to="/cart"
              exact
              className="items-center flex"
              hidden={visibleItem}
            >
              <ShoppingCart className="text-2xl" />
              {totalQuantity > 0 && <p hidden={visibleItem}>{totalQuantity}</p>}
            </NavLink>

            <NavLink
              hidden={visibleItem}
              to="/favorites"
              exact
              className="flex items-center"
            >
              <Heart className="text-2xl" />
            </NavLink>

            {userFetched && (
              <div className="hidden sm:flex gap-2 items-center">
                <img
                  className="rounded-full"
                  src={`https://www.gravatar.com/avatar/${MD5(
                    userInfo.email
                  )}?s=35`}
                />
              </div>
            )}

            {/* mobil menu icon */}
            <div className="flex sm:hidden text-5xl">
              {!visibleItem && (
                <Menu>
                  <MenuHandler>
                    <Button className="p-0 shadow-none bg-transparent">
                      {" "}
                      <i className="bx bx-menu text-black text-3xl"></i>
                    </Button>
                  </MenuHandler>
                  <MenuList className="">
                    <NavLink to="/" className="" exact>
                      {" "}
                      <MenuItem className=""> Home</MenuItem>{" "}
                    </NavLink>
                    <NavLink to="/shopping" className="">
                      {" "}
                      <MenuItem>Shop</MenuItem>
                    </NavLink>
                    <NavLink to="/about" className="" exact>
                      {" "}
                      <MenuItem>About</MenuItem>{" "}
                    </NavLink>
                    <NavLink to="/team" className="" exact>
                      {" "}
                      <MenuItem> Team</MenuItem>
                    </NavLink>
                    <NavLink to="/pricing" exact>
                      <MenuItem> Pricing</MenuItem>{" "}
                    </NavLink>
                    <NavLink to="/contact" className="" exact>
                      {" "}
                      <MenuItem>Contact</MenuItem>
                    </NavLink>
                    <NavLink to="/signup" exact className="flex items-center">
                      {" "}
                      <MenuItem>
                        {" "}
                        <box-icon
                          name="user"
                          color="#23a6f0"
                          className="w-3 h-3"
                        ></box-icon>{" "}
                        Login - Register
                      </MenuItem>{" "}
                    </NavLink>
                  </MenuList>
                </Menu>
              )}
            </div>

            {userFetched && (
              <div className="flex sm:hidden gap-2 items-center">
                <img
                  className="rounded-full"
                  src={`https://www.gravatar.com/avatar/${MD5(
                    userInfo.email
                  )}?s=35`}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
