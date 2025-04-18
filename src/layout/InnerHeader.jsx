import { LogIn } from 'lucide-react';
import { NavLink } from "react-router-dom";

const InnerHeader = () => {
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
          <NavLink to="/login" className="text-blue-600 font-semibold flex items-center gap-1">
          <LogIn size={16} />
            Login
          </NavLink>

          <NavLink to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm">
          Become a member →
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default InnerHeader;
