import React from "react";
import { AllData } from "../assets/AllData";

function HomeBestSellerCard() {
  const items = AllData.bestSellers;

  return (
    <section className="py-20 px-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {items.map((item) => (
          <div
            key={item.key}
            className="cursor-pointer flex flex-col items-center text-center group w-full max-w-[348px]"
          >

            <img
              src={item.img}
              alt={item.product}
              className="w-[348px] h-[427px] object-cover rounded-sm shadow-sm"
            />

            <div className="flex flex-col items-center gap-2 mt-6">
              <h5 className="text-base font-semibold text-[#252B42] uppercase tracking-wide">
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

