import React from "react";
import { AllData } from "../assets/AllData";
import { ShoppingCart, Heart } from "lucide-react";

function HomeBestSellerCard() {
  const items = AllData.bestSellers;

  return (
    <section className="px-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {items.map((item) => (
          <div
            key={item.key}
            className="cursor-pointer flex flex-col items-center text-center w-full max-w-[348px]"
          >
            {/* Ürün Görseli + İkonlar */}
            <div className="w-full aspect-[3/4] bg-white overflow-hidden rounded-sm shadow-sm relative">
              <img
                src={item.img}
                alt={item.product}
                className="w-full h-full object-cover"
              />

              {/* Sabitlenmiş İkonlar (sağ üst köşe) */}
              <div className="absolute top-2 right-2 flex flex-col gap-2 z-10">
                <button className="p-2 bg-white rounded-full border border-[#E6E6E6] hover:bg-[#E3F2FD] hover:text-[#1E88E5] transition-colors">
                  <ShoppingCart size={18} />
                </button>
                <button className="p-2 bg-white rounded-full border border-[#E6E6E6] hover:bg-[#FDE2E4] hover:text-[#E91E63] transition-colors">
                  <Heart size={18} />
                </button>
              </div>
            </div>

            {/* Ürün Detayları */}
            <div className="flex flex-col items-center gap-2 mt-6">
              <h5 className="text-sm font-semibold text-[#252B42] uppercase tracking-wide">
                {item.collection}
              </h5>

              <p className="text-sm font-bold text-[#737373]">{item.product}</p>

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
        ))}
      </div>
    </section>
  );
}

export default HomeBestSellerCard;




