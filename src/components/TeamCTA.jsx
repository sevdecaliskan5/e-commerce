import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function TeamCTA() {
  return (
    <div>
      <div className="flex flex-col gap-12 py-20 text-center items-center justify-center">
        <div className="flex flex-col gap-8 px-12 sm:px-12 text-center items-center">
          <h2 className="font-bold text-[40px] text-[#252B42] ">
            Start your 14 days free trial
          </h2>
          <p className="m-auto font-normal text-sm text-[#737373]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent.
          </p>
          <button className="bg-primary-color py-[15px] text-white px-6 font-bold text-sm">
            Try it free now
          </button>
          <div className="flex p-[10px] gap-6">
            <a href="">
              <Facebook className="text-4xl text-[#395185] hover:fill-[#395185] transition-colors" />
            </a>
            <a href="">
              <Instagram className="text-4xl text-[#E4405F] hover:fill-[#E4405F] transition-colors" />
            </a>
            <a href="">
              <Linkedin className="text-4xl text-[#0A66C2] hover:fill-[#0A66C2] transition-colors" />
            </a>
            <a href="">
              <Twitter className="text-4xl text-[#1DA1F2] hover:fill-[#1DA1F2] transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
