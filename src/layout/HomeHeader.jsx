import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ChevronDown,
  Facebook,
  Twitter,
  Instagram,
  Search,
  ShoppingCart,
  Heart,
} from "lucide-react";

const HomeHeader = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="w-full bg-[#1a1e25] text-white text-sm">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-4 py-2">
        <div className="flex gap-4">
          <span>(225) 555-0118</span>
          <span>michelle.rivera@example.com</span>
        </div>
        <div className="flex gap-4 items-center">
          <span>Follow Us and get a chance to win 80% off</span>
          <div className="flex gap-2 items-center">
            <span>Follow Us:</span>
            <Facebook size={16} />
            <Twitter size={16} />
            <Instagram size={16} />
          </div>
        </div>
      </div>

      <div className="bg-white text-[#292929] py-4 px-6 flex justify-between items-center shadow-md">
        <div className="text-xl font-bold">Bandage</div>

        <nav className="flex gap-6 items-center">
          <NavLink to="/" className="flex items-center gap-1">
            Home
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <NavLink to="/shop" className="flex items-center gap-1">
              Shop <ChevronDown size={16} />
            </NavLink>

            {showDropdown && (
              <div className="absolute left-0 top-8 bg-white shadow-lg text-left border p-4 grid grid-cols-2 gap-4 w-[280px] z-50">
                <div>
                  <h4 className="font-bold">Kadın</h4>
                  <ul className="text-sm space-y-1">
                    <li>Bags</li>
                    <li>Belts</li>
                    <li>Cosmetics</li>
                    <li>Hats</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Erkek</h4>
                  <ul className="text-sm space-y-1">
                    <li>Bags</li>
                    <li>Belts</li>
                    <li>Cosmetics</li>
                    <li>Hats</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/about" exact>
            About
          </NavLink>
          <NavLink to="/blog" exact>
            Blog
          </NavLink>
          <NavLink to="/contact" exact>
            Contact
          </NavLink>
          <NavLink to="/pages" exact>
            Pages
          </NavLink>
        </nav>

        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="text-blue-500">
            Login / Register
          </a>
          <Search size={18} />
          <ShoppingCart size={18} />
          <Heart size={18} />
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
