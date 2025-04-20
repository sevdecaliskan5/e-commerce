import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products, layout }) {
  return (
    <div
      className={`max-w-[1088px] mx-auto px-4 ${
        layout === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          : "flex flex-col gap-6"
      } pb-20`}
    >
      {products.map((item) => (
        <Link
          key={item.id}
          to={`/product/${item.id}`} 
        >
          <div className="flex flex-col items-center bg-white shadow-sm overflow-hidden cursor-pointer">
            <img
              src={item.images[0]?.url}
              alt={item.name}
              className="w-full h-[300px] object-cover"
            />

            <div className="flex flex-col items-center py-6 px-2 gap-2 text-center">
              <h5 className="text-base font-semibold text-[#252B42]">
                {item.name}
              </h5>

              <div className="flex gap-2 text-sm font-bold">
                <p className="text-[#BDBDBD] line-through">${item.price}</p>
                <p className="text-[#BDBDBD] line-through">
                  ${item.price.toFixed(2)}
                </p>
                <p className="text-[#23856D]">
                  ${(item.price * 0.9).toFixed(2)}
                </p>
              </div>

              <div className="flex gap-2">
                {item.colors?.map((color, index) => (
                  <img
                    key={index}
                    src={color}
                    alt={`Color ${index}`}
                    className="w-5 h-5 rounded-full"
                  />
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
