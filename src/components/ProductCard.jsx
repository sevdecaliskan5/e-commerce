import React from "react";
import { Heart, Share2, Star } from "lucide-react";
import { Button } from "@material-tailwind/react";

export default function ProductCard() {
  // Geçici placeholder veri
  const product = {
    name: "Product Title",
    description:
      "The best product description that highlights the product features, benefits, and key points clearly to the user.",
    price: 199.99,
    rating: 4.5,
    stock: 12,
    images: [],
  };

  return (
    <div className="bg-[#FAFAFA] w-full py-10 px-4">
      <div className="max-w-[1088px] mx-auto flex flex-col md:flex-row gap-10">
        {/* Image Section */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center rounded-lg">
            <span className="text-gray-500">Image Placeholder</span>
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-20 h-20 bg-gray-300 rounded-md"></div>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="flex-1 flex flex-col gap-6 text-[#252B42]">
          <h2 className="text-[24px] md:text-[32px] font-bold leading-[48px]">
            {product.name}
          </h2>

          <div className="flex items-center gap-2">
            {[...Array(4)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-yellow-400 fill-yellow-400"
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

          <h4 className="text-sm font-bold text-[#252B42]">
            Product Description:
          </h4>
          <p className="text-sm text-[#737373] leading-6">
            {product.description}
          </p>
          <hr />
          <div className="flex items-center gap-4 mt-4">
            <Button className="bg-[#23A6F0] text-white px-8 py-3 rounded-md text-sm font-bold shadow-md hover:shadow-lg transition-all">
              Add To Cart
            </Button>
            <div className="cursor-pointer transition-colors duration-300 text-[#23A6F0] hover:text-[#E91E63]">
              <Heart className="w-5 h-5" />
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
