import React from "react";
import { NavLink } from "react-router-dom";

export default function PricingHeader() {
  return (
    <div className="w-full flex justify-center bg-white">
      <div className="w-full max-w-[1050px] px-4 md:px-0 py-12 md:py-[100px]">
        <div className="flex flex-col gap-4 text-center">

          <h5 className="text-[#737373] font-bold text-sm md:text-base tracking-[0.2px]">
            PRICING
          </h5>

          <h1 className="text-[#252B42] font-bold text-4xl md:text-[58px] leading-tight">
            Simple Pricing
          </h1>

          <div className="flex items-center justify-center gap-[10px] text-[#737373] text-sm md:text-base pt-4">
            <NavLink to="/" className="text-[#252B42] font-bold hover:underline">
              Home
            </NavLink>
            <span className="text-[#BDBDBD] text-2xl">›</span>
            <p className="text-[#737373]">Pricing</p>
          </div>
        </div>
      </div>
    </div>
  );
}
