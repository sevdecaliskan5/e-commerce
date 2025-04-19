import React from "react";
import { AllData } from "../assets/AllData";

const HeroCategories = () => {
  const items = AllData.categories;

  return (
    <div className="max-w-[1088px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 py-8">
      {items.map((item) => (
        <div
          key={item.key}
          className="relative h-[238px] w-full cursor-pointer overflow-hidden rounded shadow-md group"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-125"
            loading="lazy"
          />
          <div className="absolute inset-0 z-0" />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-2">
            <h3 className="font-bold text-lg md:text-xl">{item.category}</h3>
            <p className="text-sm md:text-base mt-1">{item.number}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCategories;


