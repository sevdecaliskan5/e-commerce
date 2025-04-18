import React from "react";
import { Images } from "../assets/Images";
import { Link } from "react-router-dom";

const AboutTestimonials = () => {
  return (
    <div className="bg-[#2A7CC7]">
      <div className="w-full flex justify-center">
        <div className="w-full md:w-[1440px] flex flex-col md:flex-row items-center justify-between px-4 md:px-0">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 w-full md:w-[500px] py-12 md:py-28 text-white">
            <h5 className="font-bold text-base leading-5 tracking-[0.2px]">
              WORK WITH US
            </h5>

            <h2 className="font-bold text-3xl md:text-[40px] leading-[50px]">
              Now Let's grow Yours
            </h2>
            <p className="font-normal text-sm text-white max-w-[500px] leading-[20px] tracking-[0.2px] text-center md:text-left">
              The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
            </p>
            <Link
              to="/contact"
              className="py-[15px] w-[130px] rounded-md border border-white text-sm font-bold text-white hover:bg-white hover:text-[#2A7CC7] transition-colors duration-300 text-center"
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
