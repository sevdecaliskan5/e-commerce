import React from "react";

import HomeBestSellerCard from "../components/HomeBestSellerCard";

function HomeBestSellers() {
  return (
    <div className="pl-[195px] pr-[121px] ">
      <div className="flex flex-col items-center gap-[10px] py-[80px]">
        <h4 className="text-[20px] text-[#737373] text-center">
          Featured Products
        </h4>
        <h2 className="text-[24px] font-bold text-center">
          BESTSELLER PRODUCTS
        </h2>
        <h4 className="text-[14px] text-[#737373] text-center">
          Problems trying to resolve the conflict between
        </h4>
      </div>
      <div>
        <HomeBestSellerCard />
      </div>
    </div>
  );
}

export default HomeBestSellers;