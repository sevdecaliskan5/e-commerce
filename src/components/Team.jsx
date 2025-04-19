import React from "react";
import { AllData } from "../assets/AllData";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Team = () => {
  const items = AllData.team;

  return (
    <div className="w-full flex justify-center bg-white">
      <div className="w-full max-w-[1034px] px-4 md:px-0">
        <div className="flex flex-col gap-10 md:gap-24 text-[#252B42] items-center py-12 md:py-28">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-3xl md:text-[40px] font-bold leading-[50px]">
              Meet Our Team
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] w-full">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  className="w-full h-[231px] object-cover"
                  src={item.img}
                  alt={item.header}
                />
                <div className="flex flex-col gap-2 p-6 items-center text-center">
                  <h5 className="text-base font-bold">{item.header}</h5>
                  <h6 className="text-sm font-normal text-[#737373]">
                    {item.role}
                  </h6>
                  <div className="flex gap-4 justify-center mt-2">
                    <a
                      href={item.facebook}
                      className="text-primary-color hover:text-[#395185] transition-colors"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href={item.instagram}
                      className="text-primary-color hover:text-[#E4405F] transition-colors"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href={item.twitter}
                      className="text-primary-color hover:text-[#1DA1F2] transition-colors"
                    >
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

export default Team;


