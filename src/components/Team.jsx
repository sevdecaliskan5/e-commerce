import React from "react";
import { AllData } from "../assets/AllData";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Team = () => {
  const items = AllData.team;
  return (
    <div>
      <div className="flex flex-col gap-28 text-[#252B42] text-center items-center py-28 ">
        <div className="flex flex-col gap-2">
          <h1 className="px-20 sm:px-0 font-bold text-[40px]">Meet Our Team</h1>
        </div>
        <div className="w-[1034px] mx-auto flex flex-wrap gap-6 justify-between">
          {items.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-[30%] lg:w-[30%] font-bold flex flex-col items-center"
            >
              <img
                className="w-[316px] h-[231px] object-cover"
                src={item.img}
                alt={item.header}
              />
              <div className="flex flex-col gap-[10px] p-[30px]">
                <h5 className="text-base">{item.header}</h5>
                <h6 className="font-normal text-sm">{item.role}</h6>
                <div className="flex gap-3 justify-center">
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
  );
};
export default Team;
