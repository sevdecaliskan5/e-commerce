import { NavLink } from "react-router-dom";
import car from "../assets/images/featuredImages/car.png";
import umbrella from "../assets/images/featuredImages/umbrella.png";
import home from "../assets/images/featuredImages/home.png";
function FeaturedPosts() {
  return (
    <div className="pb-16">
      <div className="sm:w-[1050px] mx-auto ">
        <div className="text-center py-16">
          <h6 className="text-primary-color font-bold text-sm font-[Montserrat]">
            Practice Advice
          </h6>
          <h3 className="font-bold text-[40px] text-[#252B42] font-[Montserrat]">
            Featured Posts
          </h3>
        </div>
        <div className="flex gap-4">
          <div className="relative shadow-xl w-[328px] m-auto">
            <img className=" w-[348px] h-[300px]" src={umbrella}></img>
            <p className="absolute top-5 left-5 font-bold text-sm px-[10px] text-[#FFFFFF] bg-[#E74040] shadow-sm">
              NEW
            </p>
            <div className="pt-[25px] pr-[15px] pb-[35px] pl-[15px] flex flex-col gap-4  w-[300px] m-auto">
              <div className="flex gap-4">
                <p className="text-[#8EC2F2] font-normal text-xs">Google</p>
                <p className="text-second-text font-normal text-xs">Trending</p>
                <p className="text-second-text font-normal text-xs">New</p>
              </div>
              <h4 className="font-normal text-xl text-[#252B42]">
                Loudest à la Madison #1 (L'integral)
              </h4>
              <p className="font-normal text-xs text-second-text">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="flex justify-between">
                <div className="font-normal text-xs text-second-text">
                  <i className="bx bx-alarm text-primary-color"></i>
                  2 April 2025
                </div>
                <div className="font-normal text-xs text-second-text">
                  <i className="bx bx-line-chart text-[#23856D]"></i>
                  18 comments
                </div>
              </div>
              <NavLink
                to=""
                className="flex font-bold text-sm text-second-text items-center "
              >
                Learn More
                <i className="bx bx-chevron-right text-primary-color text-2xl "></i>
              </NavLink>
            </div>
          </div>
          <div className="relative shadow-xl w-[328px] m-auto">
            <img className=" w-[348px] h-[300px]" src={home}></img>
            <p className="absolute top-5 left-5 font-bold text-sm px-[10px] text-[#FFFFFF] bg-[#E74040] shadow-sm">
              NEW
            </p>
            <div className="pt-[25px] pr-[15px] pb-[35px] pl-[15px] flex flex-col gap-4  w-[300px] m-auto">
              <div className="flex gap-4">
                <p className="text-[#8EC2F2] font-normal text-xs">Google</p>
                <p className="text-second-text font-normal text-xs">Trending</p>
                <p className="text-second-text font-normal text-xs">New</p>
              </div>
              <h4 className="font-normal text-xl text-[#252B42]">
                Loudest à la Madison #1 (L'integral)
              </h4>
              <p className="font-normal text-xs text-second-text">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="flex justify-between">
                <div className="font-normal text-xs text-second-text">
                  <i className="bx bx-alarm text-primary-color"></i>
                  8 April 2025
                </div>
                <div className="font-normal text-xs text-second-text">
                  <i className="bx bx-line-chart text-[#23856D]"></i>
                  12 comments
                </div>
              </div>
              <NavLink
                to="/feature-posts/detail"
                className="flex font-bold text-sm text-second-text items-center "
              >
                Learn More
                <i className="bx bx-chevron-right text-primary-color text-2xl "></i>
              </NavLink>
            </div>
          </div>
          <div className="relative shadow-xl w-[328px] m-auto">
            <img className=" w-[348px] h-[300px]" src={car}></img>
            <p className="absolute top-5 left-5 font-bold text-sm px-[10px] text-[#FFFFFF] bg-[#E74040] shadow-sm">
              NEW
            </p>
            <div className="pt-[25px] pr-[15px] pb-[35px] pl-[15px] flex flex-col gap-4  w-[300px] m-auto">
              <div className="flex gap-4">
                <p className="text-[#8EC2F2] font-normal text-xs">Google</p>
                <p className="text-second-text font-normal text-xs">Trending</p>
                <p className="text-second-text font-normal text-xs">New</p>
              </div>
              <h4 className="font-medium text-xl text-[#252B42]">
                Loudest à la Madison #1 (L'integral)
              </h4>
              <p className="font-normal text-xs text-second-text">
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
              <div className="flex justify-between">
                <div className="font-normal text-xs text-second-text">
                  <i className="bx bx-alarm text-primary-color"></i>
                  22 April 2025
                </div>
                <div className="font-normal text-xs text-second-text">
                  <i className="bx bx-line-chart text-[#23856D]"></i>
                  21 comments
                </div>
              </div>
              <NavLink
                to="/feature-posts/detail"
                className="flex font-bold text-sm text-second-text items-center "
              >
                Learn More
                <i className="bx bx-chevron-right text-primary-color text-2xl "></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FeaturedPosts;