import React from "react";
import { Images } from "../assets/Images";

export const AboutVideo = () => {
  return (
    <div className="w-full flex justify-center px-4 py-12 md:py-28">
      <div className="w-full md:w-[989px] md:h-[540px] rounded-lg overflow-hidden">
        <img
          src={Images.about.about2}
          alt="Video placeholder"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};
