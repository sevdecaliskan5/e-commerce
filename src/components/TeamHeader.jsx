import React from "react";
import { NavLink } from "react-router-dom";

export default function TeamHeader() {
  return (
    <div className="py-[50px]">
      <div className="flex flex-col gap-4 items-center text-center px-4 sm:px-0">
        <h5 className="font-bold text-base text-[#737373]">WHAT WE DO</h5>
        <h5 className="font-bold text-4xl sm:text-6xl text-[#252B42] max-w-[900px]">
          Innovation tailored for you
        </h5>
        <div className="flex gap-[15px] py-[10px] justify-center text-sm sm:text-base text-[#252B42] font-bold">
          <NavLink to="/" className="hover:underline">Home</NavLink>
          <span className="text-[#BDBDBD]">›</span>
          <span className="text-[#737373] font-normal">Team</span>
        </div>
      </div>
    </div>
  );
}
