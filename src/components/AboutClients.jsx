import React from "react";
import { Images } from "../assets/Images";

export default function AboutClients() {
  return (
    <div className="bg-[#FAFAFA]">
       <div className="w-full flex justify-center">
         <div className="w-full md:w-[1034px] px-4 md:px-0">
           <div className="py-12 md:py-20 flex flex-col gap-6 text-center items-center">
             <div className="flex flex-col gap-2">
               <h1 className="font-bold text-3xl md:text-[40px]">Big Companies Are Here</h1>
               <h6 className="font-normal text-sm max-w-[469px] p-4 md:p-0 mx-auto">
                 Problems trying to resolve the conflict between the two major realms
                 of Classical physics: Newtonian mechanics{" "}
               </h6>
             </div>
             <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[40px] py-8 md:py-[50px] w-full">
               <img className="w-[80px] h-[33.81px] object-contain" src={Images.icons.hooli} alt="Hooli" />
               <img className="w-[83px] h-[59px] object-contain" src={Images.icons.lyft} alt="Lyft" />
               <img className="w-[102px] h-[75px] object-contain" src={Images.icons.spring} alt="Spring" />
               <img className="w-[103px] h-[42px] object-contain" src={Images.icons.stripe} alt="Stripe" />
               <img className="w-[104px] h-[62px] object-contain" src={Images.icons.amazon} alt="Amazon" />
               <img className="w-[76px] h-[72px] object-contain" src={Images.icons.reddit} alt="Reddit" />
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
