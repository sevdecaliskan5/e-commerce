import React from "react";

const AboutContent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 py-6 px-4 md:px-0">
      <div className="w-full md:w-[390px] flex flex-col items-center md:items-start gap-4 md:gap-6">
        <p className="text-[#E74040] text-sm font-normal">Problems trying</p>
        <p className="text-[#252B42] text-2xl md:text-3xl font-bold text-center md:text-start max-w-[300px] md:max-w-none">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        </p>
      </div>
      <div className="w-full md:w-[520px]">
        <p className="text-[#737373] font-normal text-sm text-center md:text-start max-w-[300px] md:max-w-none mx-auto md:mx-0">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
    </div>
  );
};
export default AboutContent;
