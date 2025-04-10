import React from "react";
import {Images} from "../assets/Images"

export const AboutVideo = () => {
  return (
    <div className=" relative z-0 w-full sm:w-auto p-1 sm:p-6">
      <img className="relative z-0 sm:h-full sm:w-full rounded-lg">
        <img src={Images.about.about2} />
        Your browser does not support the video tag.
      </img>
      <i className="absolute bx bx-play text-8xl text-white"></i>
    </div>
  );
};