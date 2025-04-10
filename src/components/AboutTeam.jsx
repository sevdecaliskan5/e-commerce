import React from "react";
import { AllData } from "../assets/AllData";
import { Facebook , Twitter, Instagram } from 'lucide-react';

export const AboutTeam = () => {
  const items = AllData.about;
  return (
    <div>
      <div className="flex flex-col gap-28 text-[#252B42] text-center items-center py-28">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-[40px]">Meet Our Team</h1>
          <h6 className="font-normal text-sm sm:w-[469px] p-6 sm:p-0 m-auto">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </h6>
        </div>
        <div className="mobile-col-flex gap-6  ">
          {items.map((item) => (
            <div className="w-[316px] m-auto font-bold">
              <img className="w-[316px] h-[231px]" src={item.img}></img>
              <div className="flex flex-col gap-[10px] p-[30px]">
                <h5 className="text-base">{item.header}</h5>
                <h6 className="text-sm">{item.role}</h6>
                <div className="flex gap-5 justify-center ">
                  <a href={item.facebook}>
                    <Facebook/>
                    <i className="bx bxl-facebook-circle text-2xl text-[#335BF5] sm:text-primary-color"></i>
                  </a>
                  <a href={item.instagram}>
                   <Instagram/>
                    <i className="bx bxl-instagram text-2xl text-[#E51F5A] sm:text-primary-color"></i>
                  </a>
                  <a href={item.twitter}>
                    <Twitter/>
                    <i className="bx bxl-twitter text-2xl text-primary-color "></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};