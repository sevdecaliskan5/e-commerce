import React from "react";
import { Images } from "../assets/Images";

export default function AboutClients() {
  return (
    <div className="bg-[#FAFAFA] ">
      <div className="py-20 flex flex-col gap-6 text-center items-center">
      <div className="flex flex-col gap-2">
          <h1 className="font-bold text-[40px]">Big Companies Are Here</h1>
          <h6 className="font-normal text-sm sm:w-[469px] p-6 sm:p-0 m-auto">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </h6>
        </div>
        <div className="mobile-col-flex justify-center items-center py-[50px] sm:gap-[30px] gap-14">
          <img className="sm:w-[80px] sm:h-[33.81px]" src={Images.icons.hooli}></img>
          <img className="sm:w-[83px] sm:h-[59px]" src={Images.icons.lyft}></img>
          <img className="sm:w-[102px] sm:h-[75px]" src={Images.icons.spring}></img>
          <img className="sm:w-[103px] sm:h-[42px]" src={Images.icons.stripe}></img>
          <img className="sm:w-[104px] sm:h-[62px]" src={Images.icons.amazon}></img>
          <img className="sm:w-[76px] sm:h-[72px] " src={Images.icons.reddit}></img>
        </div>
      </div>
    </div>
  );
}
