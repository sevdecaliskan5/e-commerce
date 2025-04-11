import React from "react";
import { AllData } from "../assets/AllData";

function ProductList() {
  const items = AllData.productList;

  return (
    <div className="max-w-[1049px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-[80px]">
      {items.map((item) => (
        <div key={item.key} className="flex flex-col items-center">
          <img
            src={item.img}
            alt={item.product}
            className="w-[239px] h-[300px] object-cover"
          />
          <div className="flex flex-col items-center py-[30px] gap-[10px]">
            <h5 className="text-[16px] font-semibold">{item.name}</h5>

            <p className="text-[14px] text-[#737373] font-bold">
              {item.category}
            </p>
            <div className="flex gap-[5px] py-[5px] px-[3px] text-[16px] font-bold">
              <p className="text-[#BDBDBD]"> $ {item.price} </p>
              <p className="text-[#23856D]"> $ {item.discountedPrice}</p>
            </div>
            <div className="flex gap-[6px]">
              {item.colors.map((color, index) => (
                <img key={index} src={color} alt={`Color ${index}`} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
