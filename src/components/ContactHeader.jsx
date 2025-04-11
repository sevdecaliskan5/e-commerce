import React from "react";
import contactHeader from "../assets/images/contact/contactHeader.png";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function ContactHeader() {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center sm:items-start text-start sm:text-start">

      <div className="flex flex-col gap-[35px] text-[#252B42] py-28 sm:pl-[16.5rem] flex-1">
        <h5 className="font-bold text-base">CONTACT US</h5>
        <h1 className="font-bold text-[40px] sm:text-[58px]">Get in touch today!</h1>
        <h4 className="text-[#737373] px-12 sm:px-0">
          We know how large objects will act, but things on a small scale
        </h4>
        <div className="flex flex-col gap-4 font-bold text-2xl">
          <p>Phone : +451 215 215</p>
          <p>Fax : +451 215 215</p>
        </div>
        <div className="flex justify-center sm:justify-start gap-[34px] p-[10px] text-[#252B42]">
          <a href="#"><Twitter size={32} /></a>
          <a href="#"><Facebook size={32} /></a>
          <a href="#"><Instagram size={32} /></a>
          <a href="#"><Linkedin size={32} /></a>
        </div>
      </div>

      <div className="flex-1">
        <img src={contactHeader} alt="Contact Header" className="w-full h-auto" />
      </div>
    </div>
  );
}
