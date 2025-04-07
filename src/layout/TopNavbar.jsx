
import React from 'react';
import { Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const TopNavbar = () => {
  return (
    <div className="w-full bg-[#252B42] text-white py-2 px-4 mx-auto">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Phone size={16} className="text-white" />
            <span className="text-sm">(213) 555-0118</span>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Mail size={16}  className="text-white"/>
            <span className="text-sm">michelle.rivera@example.com</span>
          </div>
        </div>
        
        <div className="hidden md:block">
          <span className="text-sm">Follow Us and get a chance to win 80% off</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="hidden md:inline text-sm">Follow Us : </span>
          <div className="flex items-center space-x-2">
            <Instagram size={16} className="cursor-pointer" />
            <Facebook size={16} className="cursor-pointer" />
            <Twitter size={16} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;