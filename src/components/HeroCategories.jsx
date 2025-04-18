import React from "react";
import { AllData } from "../assets/AllData";

const HeroCategories = () => {
  const items = AllData.categories;
  return (
    <div className="max-w-[1088px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 sm:px-6 lg:px-8 py-8">
      {items.map((item) => (
        <div
          key={item.key}
          className="h-40 bg-gray-200 relative overflow-hidden shadow-sm"
        >
          <img
            src={item.img}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 text-center px-2">
            <h3 className="font-semibold text-sm md:text-base">{item.category}</h3>
            <p className="text-xs md:text-sm">{item.number}</p>
          </div>
      
        </div>
      ))}
    </div>

  );
};

export default HeroCategories;
