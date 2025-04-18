import { NavLink } from "react-router-dom";

const ProductHeader = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1088px] mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <div>
          <NavLink to="/shopping" className="font-bold text-2xl">
            Shop
          </NavLink>
        </div>

        <div className="flex items-center space-x-2 text-sm font-bold text-[#737373] mt-4 md:mt-0">
          <NavLink to="/" className="text-[#252B42]">
            Home
          </NavLink>
          <span className="text-[#BDBDBD] text-lg">›</span>
          <NavLink to="/shopping" className="text-[#737373]">
            Shop
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;



