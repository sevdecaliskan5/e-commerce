import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const ProductDetailHeader = () => {
  const history = useHistory();

  return (
    <div className="bg-white">
      <div className="max-w-[1034px] mx-auto px-4 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center">
        <button
          onClick={() => history.goBack()}
          className="flex items-center font-bold text-base text-[#252B42]"
        >
          <ChevronLeft size={20} className="mr-2 text-[#BDBDBD]" />
        </button>

        <div className="flex items-center space-x-2 text-sm font-bold text-[#737373] mt-4 md:mt-0">
          <NavLink exact to="/" className="text-[#252B42]">
            Home
          </NavLink>
          <span className="text-[#BDBDBD]">›</span>
          <NavLink to="/shopping" className="text-[#737373]">
            Shop
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailHeader;



