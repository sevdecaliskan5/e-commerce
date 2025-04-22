import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Heart, Share2, Star } from "lucide-react";
import { Button } from "@material-tailwind/react";
import { addToCart } from "../features/cart/cartSlice";
import { toggleFavorite } from "../features/favorites/favoritesSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  
  const favorites = useSelector((state) => state.favorites?.favoriteList || []);
  const isFavorited = favorites.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        productQuantity: product.productQuantity || 1,
        checked: false, 
      })
    );
  };
  
  const handleToggleFavorite = () => {
    console.log("Favori ekleniyor veya çıkarılıyor:", {
      id: product.id,
      name: product.name,
      price: product.price,
    });
  
    dispatch(toggleFavorite(product));
  };
  

  return (
    <div className="bg-[#FAFAFA] w-full py-10 px-4">
      <div className="max-w-[1088px] mx-auto flex flex-col md:flex-row gap-10">
        <div className="flex-1 flex flex-col gap-4">
          <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center rounded-lg">
            <img
              src={product.images[0]?.url || "/path/to/placeholder-image.jpg"}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <div key={image.id || index} className="w-20 h-20 bg-gray-300 rounded-md">
                <img
                  src={image.url}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6 text-[#252B42]">
          <h2 className="text-[24px] md:text-[32px] font-bold leading-[48px]">
            {product.name}
          </h2>

          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-5 h-5 ${
                  index < product.rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-400"
                }`}
              />
            ))}
            <span className="text-sm font-bold text-[#737373] ml-2">
              {product.rating} Reviews
            </span>
          </div>

          <p className="text-[24px] font-bold text-[#252B42] leading-[32px]">
            ${product.price}
          </p>

          <p className="text-sm text-[#23A6F0] font-bold uppercase">
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>

          <h4 className="text-sm font-bold text-[#252B42]">Product Description:</h4>
          <p className="text-sm text-[#737373] leading-6">{product.description}</p>
          <hr />
          <div className="flex items-center gap-4 mt-4">
            <Button
              onClick={handleAddToCart}
              className="bg-[#23A6F0] text-white px-8 py-3 rounded-md text-sm font-bold shadow-md hover:shadow-lg transition-all"
            >
              Add To Cart
            </Button>

            <div
              onClick={handleToggleFavorite}
              className={`cursor-pointer transition-colors duration-300 ${
                isFavorited ? "text-[#E91E63]" : "text-[#23A6F0]"
              }`}
            >
              <Heart
                className={`w-5 h-5 cursor-pointer transition-colors duration-300 text-[#23A6F0] hover:text-[#E91E63] ${
                  isFavorited ? "fill-[#E91E63]" : "fill-transparent"
                }`}
              />
            </div>

            <div className="cursor-pointer transition-colors duration-300 text-[#23A6F0] hover:text-[#1E88E5]">
              <Share2 className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
