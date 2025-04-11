import React from "react";

const ProductFilterBar = () => {
  return (
    <div className="max-w-[1050px] flex mx-auto justify-between items-center px-8 pb-4">
      <p>Showing all 12 results</p>
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <button>🔲</button>
          <button>☰</button>
        </div>
        <select className="border rounded px-2 py-1">
          <option>Popularity</option>
          <option>Price</option>
        </select>
        <button className="bg-blue-500 text-white px-4 py-1 rounded">Filter</button>
      </div>
    </div>
  );
};

export default ProductFilterBar;
