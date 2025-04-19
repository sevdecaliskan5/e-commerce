import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const OrderSummary = () => {
  const { totalAmount } = useSelector((store) => store.shoppingCart);

  // Kargo bedava mı?
  const isFreeShipping = totalAmount >= 150;
  const shippingCost = isFreeShipping ? 0 : 30;
  const finalAmount = totalAmount + shippingCost;

  return (
    <div className="w-96 mx-auto sm:py-10">
      <div className="flex flex-col gap-4 text-gray-600 pt-3 bg-white shadow-lg p-6">
        <h5 className="py-3 font-bold text-sm text-black">ORDER SUMMARY :</h5>

        <div className="flex justify-between">
          <span className="text-sm">Cart Total :</span>
          <span className="text-sm text-black font-bold">
            {totalAmount.toFixed(2)} TL
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm">Shipping Cost :</span>
          <span className="text-sm text-black font-bold">
            {shippingCost.toFixed(2)} TL
          </span>
        </div>

        {isFreeShipping && (
          <div className="flex justify-between">
            <span className="text-sm w-2/3">
              Free shipping for orders of 150 TL and above
            </span>
            <span className="text-sm text-orange-700 font-bold">-30 TL</span>
          </div>
        )}

        <hr className="w-full border-t" />

        <div className="flex justify-between">
          <span className="text-sm text-black font-bold">TOTAL :</span>
          <span className="text-sm text-orange-700 font-bold">
            {finalAmount.toFixed(2)} TL
          </span>
        </div>

        <input
          type="text"
          placeholder="Discount code"
          className="text-center w-full p-2 border border-gray-400 rounded"
        />

        <NavLink
          to="/order"
          className="h-full w-full bg-orange-800 text-white p-4 rounded-md text-center font-semibold"
        >
          CHECKOUT
        </NavLink>
      </div>
    </div>
  );
};

export default OrderSummary;
