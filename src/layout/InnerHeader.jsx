import { LogIn, ShoppingCart, Heart } from 'lucide-react';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTotals } from "../features/cart/cartSlice";
import { useState } from "react";

const InnerHeader = () => {
  const { totalQuantity } = useSelector(selectTotals);
  const [visibleItem, setVisibleItem] = useState(false);

  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-[1322px] mx-auto flex justify-between items-center px-6 py-4 text-sm text-[#292929]">
        <div className="text-xl font-bold">Bandage</div>

        <nav className="flex gap-4 items-center text-gray-700">
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/product" exact>
            Product
          </NavLink>
          <NavLink to="/pricing" exact>
            Pricing
          </NavLink>
          <NavLink to="/contact" exact>
            Contact
          </NavLink>
        </nav>

        <div className="flex gap-4 items-center">

          <div className="relative">
            <input
              type="text"
              name="searchingItem"
              className={`border border-gray-300 bg-[#F5F5F5] text-sm text-black p-2 rounded-md transition-all duration-200 ${
                visibleItem ? "w-64 opacity-100" : "w-0 opacity-0"
              }`}
              placeholder="Search"
            />
            <button
              onClick={() => setVisibleItem(!visibleItem)}
              className="absolute right-0 top-0 h-full px-3 text-gray-600 hover:text-black"
            >
              <i className="bx bx-search text-xl"></i>
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

          <NavLink
            to="/login"
            className="text-blue-600 font-semibold flex items-center gap-1"
          >
            <LogIn size={16} />
            Login
          </NavLink>

          <NavLink
            to="/signup"
            className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm"
          >
            Become a member →
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default InnerHeader;
