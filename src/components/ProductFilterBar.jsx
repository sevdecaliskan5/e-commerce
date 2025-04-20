import React from "react";

const ProductFilterBar = ({
  layout,
  setLayout,
  sortOption,
  handleSortChange,
  totalResults,
}) => {

  return (
    <div className="max-w-[1088px] mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-sm font-bold text-[#737373]">
        Showing {totalResults} results
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex gap-2 border border-[#E0E0E0] p-1 rounded-md">
          <button
            onClick={() => setLayout("grid")}
            className={`text-lg px-2 py-1 rounded ${
              layout === "grid"
                ? "bg-[#23A6F0] text-white"
                : "hover:bg-gray-100"
            } cursor-pointer`}
          >
            🔲
          </button>
          <button
            onClick={() => setLayout("list")}
            className={`text-lg px-2 py-1 rounded ${
              layout === "list"
                ? "bg-[#23A6F0] text-white"
                : "hover:bg-gray-100"
            } cursor-pointer`}
          >
            ☰
          </button>
        </div>

        <select
          value={sortOption}
          onChange={handleSortChange}
          className="border border-[#E0E0E0] text-sm px-3 py-2 rounded-md cursor-pointer"
        >
          <option>Popularity</option>
          <option>Price</option>
        </select>

        {/* <button className="bg-[#23A6F0] text-white text-sm px-5 py-2 rounded-md font-bold hover:bg-blue-600 cursor-pointer">
          Filter
        </button> */}
      </div>
    </div>
  );
};

export default ProductFilterBar;
