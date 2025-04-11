import React from "react";
import { AllData } from "../assets/AllData";
import { Facebook, Twitter, Instagram } from "lucide-react";

export const AboutTeam = () => {
  const items = AllData.about;
  return (
    <div className="w-full flex justify-center">
      <div className="w-full md:w-[1034px] px-4 md:px-0">
        <div className="flex flex-col gap-8 md:gap-28 text-[#252B42] text-center items-center py-12 md:py-28">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-3xl md:text-[40px]">Meet Our Team</h1>
            <h6 className="font-normal text-sm max-w-[469px] p-4 md:p-0 mx-auto">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </h6>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-6 w-full">
            {items.map((item) => (
              <div key={item.id} className="w-full md:w-[330px] font-bold">
                <img
                  className="w-full h-[231px] object-cover"
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
    </div>
  );
};
