import React from "react";
import { AllData } from "../assets/AllData";

const HeroCategories = () => {
  const items = AllData.categories;
  return (
    <div className="max-w-[1088px] items-center mx-auto grid grid-cols-5 gap-4 px-8 py-8">
      {items.map((item) => (
        <div
          key={item.key}
          className="h-40 bg-gray-200 flex items-end justify-center relative overflow-hidden"
        >
          <img
            src={item.img}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-opacity-30" />
          <div className="text-white z-10 text-center my-auto">
            <h3 className="font-semibold">{item.category}</h3>
            <p>{item.number}</p>
          </div>
      
        </div>
      ))}
    </div>

  );
};

export default HeroCategories;
