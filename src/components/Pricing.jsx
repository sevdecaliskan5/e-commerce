import React, { useState } from "react";
import { CircleCheck } from "lucide-react";

export default function Pricing() {
  const [toggle, setToggle] = useState(false);
  const [pricingType, setPricingType] = useState("Year");
  const [bgClass, setBgClass] = useState("[#252B42]");
  const [save, setSave] = useState("35%");

  const toggleButtonClass = " transform translate-x-3 md:translate-x-6";

  const changePricingType = () => {
    setBgClass(bgClass === "[#252B42]" ? "white" : "[#252B42]");
    setToggle(!toggle);
    setPricingType(pricingType === "Year" ? "Month" : "Year");
    setSave(pricingType === "Year" ? "25%" : "35%");
  };

  const Card = ({ title, price, features, dark }) => (
    <div className={`sm:w-[329px] ${dark ? 'sm:h-[704px]' : 'sm:h-[664px]'} flex-none flex flex-col justify-between py-[50px] px-10 ${dark ? 'text-white bg-[#252B42]' : 'text-[#252B42] bg-white'} border border-primary-color rounded-lg`}>
      <div className="flex flex-col gap-[35px] items-center text-center">
        <h3 className="font-bold text-2xl">{title}</h3>
        <h5 className="font-bold text-base text-[#737373]">Organize across all apps by hand</h5>
        <div className="flex gap-[10px] text-primary-color items-end">
          <h2 className="text-[#8EC2F2] font-bold text-[40px]">{price}</h2>
          <div className="flex flex-col gap-1 items-start">
            <h3 className="text-[#8EC2F2] text-2xl font-bold">$</h3>
            <h5 className="text-[#8EC2F2] font-bold text-sm">Per {pricingType}</h5>
          </div>
        </div>
        <div className="flex flex-col gap-[15px] items-start">
          {features.map((item, index) => (
            <div key={index} className="flex gap-[10px] font-bold text-sm items-center">
              <CircleCheck className={`${item.available ? 'text-[#2dc071]' : 'text-[#BDBDBD]'} text-5xl`} />
              <h6>{item.label}</h6>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <button className={`${dark ? 'bg-primary-color' : 'bg-[#252B42]'} text-white px-10 py-[15px] text-sm font-bold`}>Try for free</button>
      </div>
    </div>
  );

  const features = [
    { label: "Unlimited product updates", available: true },
    { label: "Unlimited product updates", available: true },
    { label: "Unlimited product updates", available: true },
    { label: "Unlimited product updates", available: false },
    { label: "Unlimited product updates", available: false },
  ];

  return (
    <div className="bg-[#FAFAFA]">
      <div className="flex flex-col gap-12 py-28 sm:px-12 text-center items-center">
        <div className="header">
          <div className="flex flex-col gap-[10px]">
            <h6 className="text-4xl font-bold text-[#252B42]">Pricing</h6>
            <h2 className="px-10 sm:px-96 text-sm text-[#737373] font-normal">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </h2>
          </div>
        </div>

        <div className="flex gap-4 font-bold items-center">
          <p className="text-[#252B42] text-base">Monthly</p>
          <button
            className={`md:w-14 md:h-7 w-7 h-2 flex items-center dark:bg-[#3A3A3A] bg-${bgClass} rounded-full sm:p-1 cursor-pointer duration-700 ease-in-out border border-primary-color`}
            onClick={changePricingType}
          >
            <CircleCheck
              className={
                "text-[#D0D0D0] md:w-6 md:h-6 md:text-2xl text-xl md:pb-8 transform duration-700 ease-in-out " +
                (toggle ? null : toggleButtonClass)
              }
            />
          </button>
          <p className="text-[#252B42] text-base">Yearly</p>
          <button className="flex gap-[10px] text-primary-color bg-[#B2E3FF] py-[10px] px-5 text-sm rounded-[37px]">
            Save {save}
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:gap-0 gap-y-6 gap-x-0 sm:items-end">
          <Card title="FREE" price="0" features={features} dark={false} />
          <Card title="STANDARD" price="9.99" features={features} dark={true} />
          <Card title="PREMIUM" price="19.99" features={features} dark={false} />
        </div>
      </div>
    </div>
  );
}