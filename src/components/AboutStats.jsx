import React from "react";

const AboutStats = () => {
  return (
    <div className="w-full flex justify-center bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 text-center py-12 md:py-20 px-4 md:px-0 w-full md:w-[1018px]">
        <div className="w-full md:w-auto">
          <p className="font-bold text-[40px] md:text-[58px] leading-[80px] text-[#252B42]">15K</p>
          <p className="font-bold text-sm md:text-base leading-6 text-[#737373]">Happy Customers</p>
        </div>
        <div className="w-full md:w-auto">
          <p className="font-bold text-[40px] md:text-[58px] leading-[80px] text-[#252B42]">150K</p>
          <p className="font-bold text-sm md:text-base leading-6 text-[#737373]">Monthly Visitors</p>
        </div>
        <div className="w-full md:w-auto">
          <p className="font-bold text-[40px] md:text-[58px] leading-[80px] text-[#252B42]">15</p>
          <p className="font-bold text-sm md:text-base leading-6 text-[#737373]">Countries Worldwide</p>
        </div>
        <div className="w-full md:w-auto">
          <p className="font-bold text-[40px] md:text-[58px] leading-[80px] text-[#252B42]">100+</p>
          <p className="font-bold text-sm md:text-base leading-6 text-[#737373]">Top Partners</p>
        </div>
      </div>
    </div>
  );
};

export default AboutStats;
