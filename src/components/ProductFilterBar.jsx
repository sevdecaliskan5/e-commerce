import React from "react";

const ProductFilterBar = ({ layout, setLayout, sortOption, handleSortChange }) => {
  return (
    <div className="max-w-[1050px] flex flex-col sm:flex-row justify-between items-center mx-auto px-4 py-4 gap-4">
      <p className="text-sm">Showing all 12 results</p>
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <button onClick={() => setLayout("grid")}>🔲</button>
          <button onClick={() => setLayout("list")}>☰</button>
        </div>
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="border rounded px-2 py-1"
        >
          <option>Popularity</option>
          <option>Price</option>
        </select>
        <button className="bg-blue-500 text-white px-4 py-1 rounded">
          Filter
        </button>
      </div>
    </div>
  );
};

export default ProductFilterBar;
