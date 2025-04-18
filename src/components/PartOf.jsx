import couple from "../assets/images/featuredImages/couple.png";

function PartOf() {
  return (
    <div className="flex flex-col lg:flex-row max-w-[1440px] w-full mx-auto px-4 lg:px-[135px] py-[60px] items-center gap-[60px]">

      <div className="w-full lg:w-1/2">
        <img
          src={couple}
          alt="Couple"
          className="w-full max-w-[725px] h-auto object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-6 sm:text-center lg:text-start lg:justify-start">
        <h5 className="text-sm font-bold text-[#BDBDBD] tracking-[0.2px]">
          SUMMER 2025
        </h5>
        <h1 className="text-[40px] lg:text-[58px]  font-bold text-[#252B42] leading-[80px] tracking-[0.2px] max-w-[525px] sm:mx-auto lg:mx-0">
          Part of the Neural Universe
        </h1>
        <p className="text-base font-normal text-[#737373] lg:text-start leading-7 tracking-[0.2px] max-w-[376px] sm:mx-auto lg:mx-0">
          We know how large objects will act, but things on a small scale.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
          <button className="bg-[#2DC071] text-white text-base font-bold px-[40px] py-[15px] rounded hover:bg-[#23856D] transition-colors duration-300">
            BUY NOW
          </button>
          <button className="text-[#2DC071] border border-[#2DC071] text-base font-bold px-[40px] py-[15px] rounded hover:bg-[#23856D] hover:text-white transition-colors duration-300">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default PartOf;
