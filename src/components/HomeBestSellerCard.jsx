import React from "react";
import { AllData } from "../assets/AllData";
import { ShoppingCart, Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { toggleFavorite } from "../features/favorites/favoritesSlice";

function HomeBestSellerCard() {
  const items = AllData.bestSellers;
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites?.favoriteList || []);
  const cart = useSelector((state) => state.cart?.cartList || []);

  const handleAddToCart = (item) => {
    const productToAdd = {
      id: item.key, // Redux slice içinde id kullanılıyor
      name: item.product,
      price: Number(item.discountedPrice),
      images: [{ url: item.img }],
    };

    console.log("Ürün sepete ekleniyor:", productToAdd);
    dispatch(addToCart(productToAdd));
  };

  const handleToggleFavorite = (item) => {
    const productToToggle = {
      id: item.key,
      key: item.key,
      name: item.product,
      img: item.img,
    };

    console.log("Favori değiştiriliyor:", productToToggle);
    dispatch(toggleFavorite(productToToggle));
  };

  return (
    <section className="px-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {items.map((item) => {
          const isFavorite = favorites.some((fav) => fav.key === item.key);

          return (
            <div
              key={item.key}
              className="cursor-pointer flex flex-col items-center text-center w-full max-w-[348px]"
            >
              <div className="w-full aspect-[3/4] bg-white overflow-hidden rounded-sm shadow-sm relative">
                <img
                  src={item.img}
                  alt={item.product}
                  className="w-full h-full object-cover"
                />

                {/* icons */}
                <div className="absolute top-2 right-2 flex flex-col gap-2 z-10">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="p-2 bg-white rounded-full border border-[#E6E6E6] hover:bg-[#E3F2FD] hover:text-[#1E88E5] transition-colors"
                    title="Sepete Ekle"
                  >
                    <ShoppingCart size={18} />
                  </button>
                  <button
                    onClick={() => handleToggleFavorite(item)}
                    className={`p-2 bg-white rounded-full border border-[#E6E6E6] ${
                      isFavorite
                        ? "text-[#E91E63] bg-[#FDE2E4]"
                        : "hover:bg-[#FDE2E4] hover:text-[#E91E63]"
                    } transition-colors`}
                    title="Favorilere Ekle"
                  >
                    <Heart
                      size={18}
                      fill={isFavorite ? "#E91E63" : "none"}
                    />
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 mt-6">
                <h5 className="text-sm font-semibold text-[#252B42] uppercase tracking-wide">
                  {item.collection}
                </h5>

                <p className="text-sm font-bold text-[#737373]">
                  {item.product}
                </p>

                <div className="flex gap-2 text-sm font-bold">
                  <span className="text-[#BDBDBD] line-through">
                    {item.price}
                  </span>
                  <span className="text-[#23856D]">{item.discountedPrice}</span>
                </div>

                <div className="flex gap-2 mt-2">
                  {item.colors.map((color, index) => (
                    <img
                      key={index}
                      src={color}
                      alt={`Color ${index}`}
                      className="w-4 h-4 rounded-full border"
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HomeBestSellerCard;
