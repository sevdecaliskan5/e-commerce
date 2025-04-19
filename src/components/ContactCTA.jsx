import React from "react";
import arrow from "../assets/images/contact/arrow.png";
import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-20">
      <div className="flex flex-col items-center text-center pb-20 text-[#252B42]">
        <img src={arrow} alt="Arrow" className="mb-4" />

        <div className="flex flex-col gap-6 font-bold mt-2">
          <h5 className="text-base uppercase">We can't wait to meet you</h5>
          <h2 className="text-[40px] sm:text-[58px] leading-tight">Let’s Talk</h2>

          <Link
            to="/pricing"
            className="bg-primary-color text-white py-[15px] px-10 text-sm w-[186px] m-auto rounded-full font-bold hover:opacity-90 transition"
          >
            Try it free now
          </Link>
        </div>
      </div>
    </div>
  );
}
