import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectCartList, selectTotals } from "../features/cart/cartSlice";

const OrderSummary = () => {
  const cartProducts = useSelector(selectCartList);
  const { totalAmount } = useSelector(selectTotals);

  const isFreeShipping = totalAmount >= 150;
  const shippingCost = isFreeShipping ? 0 : 30;
  const finalAmount = totalAmount + shippingCost;

  const getTotalItemsCount = () => {
    return cartProducts.reduce((total, product) => total + product.productQuantity, 0);
  };

  return (
    <div className="w-full max-w-md mx-auto py-10 px-4">
      <div className="bg-white rounded-2xl shadow-md p-6 text-gray-700 space-y-4 border border-gray-200">
        <h2 className="text-lg font-bold text-gray-900 border-b pb-3">
          Order Summary
        </h2>

        <div className="flex justify-between text-sm">
          <span>Cart Total</span>
          <span className="font-medium text-gray-900">{totalAmount.toFixed(2)} TL</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Shipping Cost</span>
          <span className="font-medium text-gray-900">{shippingCost.toFixed(2)} TL</span>
        </div>

        {isFreeShipping && (
          <div className="flex justify-between text-xs text-green-600 bg-green-50 p-2 rounded-md">
            <span>🎉 Free shipping for orders above 150 TL</span>
            <span className="font-semibold">-30 TL</span>
          </div>
        )}

        <hr className="border-t" />

        <div className="flex justify-between text-base font-semibold text-gray-800">
          <span>Total</span>
          <span className="text-orange-600">
            {(finalAmount - (isFreeShipping ? 30 : 0)).toFixed(2)} TL
          </span>
        </div>

        <div className="flex justify-between text-sm pt-1">
          <span>Total Items</span>
          <span className="font-medium">{getTotalItemsCount()} items</span>
        </div>

        <input
          type="text"
          placeholder="🎁 Discount code"
          className="w-full px-4 py-2 mt-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <NavLink
          to="/order"
          className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl font-semibold transition duration-200"
        >
          Proceed to Checkout
        </NavLink>
      </div>
    </div>
  );
};

export default OrderSummary;



