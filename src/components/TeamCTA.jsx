import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function TeamCTA() {
  return (
    <div>
      <div className="flex flex-col gap-24 py-20">
        <div className="flex flex-col gap-8 px-12 sm:px-[480px] text-center items-center">
          <h2 className="font-bold text-[40px] text-[#252B42] ">
            Start your 14 days free trial
          </h2>
          <p className=" m-auto font-normal text-sm text-[#737373]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent.
          </p>
          <button className="bg-primary-color py-[15px] px-10 font-bold text-sm">
            Try it free now
          </button>
          <div className=" flex p-[10px] gap-[34px]">
            <a href="">
              <Facebook className="text-4xl text-[#395185]" />
            </a>
            <a href="">
              <Instagram className="text-4xl text-black" />
            </a>
            <a href="">
              <Linkedin className="text-4xl text-[#0A66C2]" />
            </a>
            <a href="">
              <Twitter className="text-4xl text-[#55ACEE]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
