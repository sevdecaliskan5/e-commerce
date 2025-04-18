import React from "react";

const AboutContent = () => {
  return (
    <div className="w-full flex justify-center bg-white mt-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 py-12 px-4 md:px-0 w-full md:w-[1018px]">
        <div className="w-full md:w-[390px] flex flex-col items-center md:items-start text-center md:text-start gap-2 md:gap-4">
          <p className="text-[#E74040] text-sm font-bold">Problems trying</p>
          <p className="text-[#252B42] text-[40px] md:text-[40px] md:text-left md:item-left font-bold leading-tight max-w-[300px] md:max-w-none">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </p>
        </div>
        <div className="w-full md:w-[520px]">
  <p className="text-[#737373] text-sm font-normal text-center md:text-start md:item-start max-w-[300px] md:max-w-none mx-auto md:mx-0 leading-6">
    Problems trying to resolve the conflict between the two major realms of
    Classical physics: Newtonian mechanics.
  </p>
</div>

      </div>
    </div>
  );
};

export default AboutContent;