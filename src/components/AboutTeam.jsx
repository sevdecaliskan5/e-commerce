import React from "react";
import { AllData } from "../assets/AllData";
import { Facebook, Twitter, Instagram } from "lucide-react";

export const AboutTeam = () => {
  const items = AllData.about;

  return (
    <div className="w-full flex justify-center bg-white">
      <div className="w-full md:w-[1034px] px-4 md:px-0">
        <div className="flex flex-col gap-10 md:gap-24 text-[#252B42] items-center py-12 md:py-28">

          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-3xl md:text-[40px] font-bold leading-[50px]">Meet Our Team</h1>
            <h6 className="text-sm font-normal text-[#737373] max-w-[469px] px-4 md:px-0">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </h6>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-6 w-full">
            {items.map((item) => (
              <div key={item.id} className="w-full md:w-[330px] bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  className="w-full h-[231px] object-cover"
                  src={item.img}
                  alt={item.header}
                />
                <div className="flex flex-col gap-2 p-6 items-center text-center">
                  <h5 className="text-base font-bold">{item.header}</h5>
                  <h6 className="text-sm font-normal text-[#737373]">{item.role}</h6>
                  <div className="flex gap-4 justify-center mt-2">
                    <a href={item.facebook} className="text-primary-color hover:text-[#395185] transition-colors">
                      <Facebook size={20} />
                    </a>
                    <a href={item.instagram} className="text-primary-color hover:text-[#E4405F] transition-colors">
                      <Instagram size={20} />
                    </a>
                    <a href={item.twitter} className="text-primary-color hover:text-[#1DA1F2] transition-colors">
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};
