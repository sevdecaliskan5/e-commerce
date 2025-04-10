import React from "react";
import { Images } from "../assets/Images";
import { Link } from "react-router-dom";

const AboutTestimonials = () => {
  return (
    <div className="bg-[#2A7CC7] h-auto md:h-[636px]">
       <div className="w-full flex justify-center">
         <div className="w-full md:w-[1440px] flex flex-col md:flex-row items-center justify-between px-4 md:px-0">
           <div className="flex flex-col items-center md:items-start text-center md:text-start gap-6 w-full md:w-[500px] py-12 md:py-28 text-white">
             <h5 className="font-bold text-base">WORK WITH US</h5>
             <h2 className="font-bold text-3xl md:text-[40px]">Now Let's grow Yours</h2>
             <p className="font-normal text-sm">
               The gradual accumulation of information about atomic and small-scale
               behavior during the first quarter of the 20th{" "}
             </p>
             <Link
               to="/contact"
               className="py-[15px] w-[130px] rounded-md border border-1 border-[#FAFAFA] text-center text-[#FAFAFA] hover:bg-white hover:text-[#2A7CC7] transition-colors duration-300"
             >
               Contact
             </Link>
           </div>
           <div className="hidden md:block">
             <img 
               className="w-[590px] h-[636px] object-cover" 
               src={Images.about.about6} 
               alt="Work with us illustration"
             />
           </div>
        </div>
      </div>
    </div>
  );
};
export default AboutTestimonials;