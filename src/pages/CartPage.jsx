import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  toggleChecked,
  calculateTotals,
} from "../features/cart/cartSlice";
import { Checkbox } from "@material-tailwind/react";
import OrderSummary from "../components/OrderSummary";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((store) => store.cart.cartList);

  const updateQuantityHandle = (e, id) => {
    const updateType = e.target.id;
    if (updateType === "increment") {
      dispatch(increaseQuantity(id));
    } else if (updateType === "decrement") {
      dispatch(decreaseQuantity(id));
    }
  };

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartProducts, dispatch]);

  const checkHandle = (e) => {
    const id = e.target.id;
    const checkedState = e.target.checked;
    dispatch(toggleChecked({ checked: checkedState, id }));
    dispatch(calculateTotals());
  };

  const deleteProductFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <div className="flex justify-between sm:w-[1250px] m-auto gap-10">
        <div className="w-3/4 sm:my-20 m-auto rounded-md text-gray-600">
          {cartProducts?.map((p) => (
            <div className="flex flex-col p-2" key={p.id}>
              <div className="flex gap-2 w-full justify-between">
                <Checkbox defaultChecked id={p.id} onClick={checkHandle} />
                <img src={p?.images[0].url} className="w-20 py-2" alt={p.name} />
                <div className="flex flex-col pt-3 w-3/4">
                  <h5 className="pb-3 font-bold text-base text-black">
                    {p.name}
                  </h5>
                  <div className="flex justify-between">
                    <div className="flex gap-4 items-center">
                      <button
                        id="increment"
                        onClick={(e) => updateQuantityHandle(e, p.id)}
                        className="text-2xl"
                      >
                        +
                      </button>
                      <span className="text-base text-center border border-solid p-2 px-3">
                        {p.productQuantity}
                      </span>
                      <button
                        id="decrement"
                        onClick={(e) => updateQuantityHandle(e, p.id)}
                        className="text-2xl"
                      >
                        -
                      </button>
                      <button onClick={() => deleteProductFromCart(p.id)}>
                        <i className="bx bx-trash h-full" />
                      </button>
                    </div>
                    <span className="text-base">
                      {(p.productQuantity * p.price).toFixed(2)} TL
                    </span>
                  </div>
                </div>
              </div>
              <hr className="w-full text-white font-extrabold text-5xl" />
            </div>
          ))}
        </div>
        {cartProducts.length > 0 && <OrderSummary />}
      </div>

      {cartProducts.length === 0 && (
        <NavLink
          to="/shopping"
          className="flex opacity-75 w-80 sm:w-full text-white p-4 text-l font-bold bg-orange-300 text-center rounded-2xl shadow-lg"
        >
          Basket is empty! Let's Shop{" "}
          <i className="bx bxs-chevron-right text-2xl"></i>
        </NavLink>
      )}
    </div>
  );
}
