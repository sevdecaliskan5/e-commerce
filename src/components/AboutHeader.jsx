import { Images } from "../assets/Images";
import { Link } from "react-router-dom";

const AboutHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[120px] py-6 md:py-28 px-4 md:px-0">
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 w-full md:w-[356px]">
        <h5 className="text-[#737373] text-sm font-bold leading-5">ABOUT COMPANY</h5>
        <h1 className="text-[#252B42] text-[40px] md:text-[58px] font-bold leading-tight md:leading-[80px]">ABOUT US</h1>
        <p className="text-[#737373] text-sm md:items-left md:text-left md:text-base font-normal leading-5 max-w-[300px] md:max-w-none">
          We know how large objects will act, but things on a small scale
        </p>
        <Link
          to="/team"
          className="w-full md:w-[190px] text-sm font-bold text-white py-3 md:py-[15px] px-6 md:px-10 bg-primary-color text-center rounded hover:bg-opacity-90 transition-colors duration-300"
        >
          Get Quote Now
        </Link>
      </div>
      <div className="relative z-0 w-full md:w-auto flex justify-center">
        <div className="relative z-0 bg-[#FFE9EA] rounded-full p-16 md:p-32 lg:p-52"></div>
        <div className="absolute top-0 bg-[#FFE9EA] rounded-full p-4 md:p-6"></div>
        <div className="absolute bg-[#977DF4] rounded-full p-1 md:p-2"></div>
        <div className="absolute right-0 top-0 bg-[#977DF4] rounded-full p-1 md:p-2"></div>
        <img
          src={Images.about.about1}
          alt="About us illustration"
          className="absolute top-0 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 w-[200px] md:w-auto"
        />
      </div>
    </div>
  );
};

export default AboutHeader;