import React from "react";

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
        <div
          key={item.key}
          className="flex flex-col items-center bg-white shadow-sm overflow-hidden cursor-pointer"
        >
          <img
            src={item.img}
            alt={item.product}
            className="w-full h-[300px] object-cover"
          />
          <div className="flex flex-col items-center py-6 px-2 gap-2 text-center">
            <h5 className="text-base font-semibold text-[#252B42]">{item.name}</h5>
            <p className="text-sm text-[#737373] font-bold">{item.category}</p>

            <div className="flex gap-2 text-sm font-bold">
              <p className="text-[#BDBDBD] line-through">${item.price}</p>
              <p className="text-[#23856D]">${item.discountedPrice}</p>
            </div>

            <div className="flex gap-2">
              {item.colors.map((color, index) => (
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
      ))}
    </div>
  );
}

export default ProductList;

