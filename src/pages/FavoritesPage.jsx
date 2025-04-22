import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { removeFromFavorites, addToFavorites } from "../features/favorites/favoritesSlice";
import { Heart, ShoppingCart } from "lucide-react"; 
import { addToCart } from "../features/cart/cartSlice"; 

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites?.favoriteList || []);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRemoveFavorite = (id) => {
    dispatch(removeFromFavorites(id));
  };

  const handleAddFavorite = (item) => {
    dispatch(addToFavorites(item));
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="p-6 max-w-[1034px] mx-auto">
      <div className="bg-white">
        <div className="px-4 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center">
          <button
            onClick={() => history.goBack()}
            className="flex items-center font-bold text-base text-[#252B42]"
          >
            <ChevronLeft size={30} className="mr-2 text-[#BDBDBD]" />
          </button>

          <div className="flex items-center space-x-2 text-sm font-bold text-[#737373] mt-4 md:mt-0">
            <NavLink exact to="/" className="text-[#252B42]">
              Home
            </NavLink>
            <span className="text-[#BDBDBD]">›</span>
            <NavLink to="/cart" className="text-[#737373]">
              Cart
            </NavLink>
          </div>
        </div>
      </div>
<hr/>
      {favorites.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">
          <p className="text-lg">You haven't added any products to your favorites yet.</p>
          <Link to="/" className="text-blue-500 underline mt-2 inline-block">
            Start shopping
          </Link>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-10"> {/* Centering the grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto w-full">
            {favorites.map((item) => (
              <div key={item.id} className="border rounded-2xl shadow-sm p-4 bg-white relative">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.images[0]?.url}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-xl mb-3"
                  />
                  <h4 className="font-medium text-sm text-gray-800 line-clamp-2">{item.name}</h4>
                  <p className="text-gray-600 text-sm mt-1">${item.price}</p>
                </Link>

                <div className="flex items-center justify-between gap-3 mt-4">
                  <button
                    onClick={() => handleRemoveFavorite(item.id)}
                    className="text-pink-500 hover:text-pink-600 transition"
                    title="Favorilerden çıkar"
                  >
                    <Heart className="w-6 h-6" fill="currentColor" />
                  </button>

                  <button
                    onClick={() => handleAddToCart(item)}
                    className="text-gray-600 hover:text-gray-800 transition"
                    title="Sepete ekle"
                  >
                    <ShoppingCart className="w-6 h-6" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;



