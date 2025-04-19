import React from "react";
import contactHeader from "../assets/images/contact/contactHeader.png";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function ContactHeader() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-0 py-16 lg:py-[120px] flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
      <div className="flex-1 flex flex-col gap-6 text-[#252B42] lg:pl-[165px] text-center lg:text-left items-center lg:items-start">
        <h5 className="text-base font-bold uppercase tracking-wider">
          Contact Us
        </h5>
        <h1 className="text-[32px] sm:text-[40px] lg:text-[58px] font-bold leading-tight">
          Get in touch today!
        </h1>
        <p className="text-[#737373] max-w-[400px] lg:max-w-full">
          We know how large objects will act, but things on a small scale
        </p>
        <div className="flex flex-col gap-2 font-bold text-[16px] w-full items-center lg:items-start">
          <p>Phone : +451 215 215</p>
          <p>Fax : +451 215 215</p>
        </div>

        <div className="flex justify-center lg:justify-start gap-3 pt-2">
          <a href="#">
            <Facebook className="text-[#395185] w-6 h-6 hover:fill-[#395185]" />
          </a>
          <a href="#">
            <Instagram className="text-[#E4405F] w-6 h-6 hover:fill-[#E4405F]" />
          </a>
          <a href="#">
            <Linkedin className="text-[#0A66C2] w-6 h-6 hover:fill-[#0A66C2]" />
          </a>
          <a href="#">
            <Twitter className="text-[#1DA1F2] w-6 h-6 hover:fill-[#1DA1F2]" />
          </a>
        </div>
      </div>

      <div className="flex-1 px-4 lg:px-0">
        <img
          src={contactHeader}
          alt="Contact Header"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
