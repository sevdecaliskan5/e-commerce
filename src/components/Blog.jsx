import { NavLink } from "react-router-dom";
import BlogData from "../assets/BlogData";

function Blog() {
  const items = BlogData;
  return (
    <div className="">
      <div className="sm:w-[1050px] mx-auto text-start py-16">

        <div className="flex flex-wrap items-center justify-center gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative shadow-xl w-[328px] m-auto"
            >
              <img
                className="w-[348px] h-[300px]"
                src={item.img}
                alt={item.title}
              />
              <p className="absolute top-5 left-5 font-bold text-sm px-[10px] text-white bg-[#E74040] shadow-sm">
                NEW
              </p>
              <div className="pt-[25px] pr-[15px] pb-[35px] pl-[15px] flex flex-col gap-4 w-[300px] m-auto">
                <div className="flex gap-4">
                  {item.tags.map((tag, index) => (
                    <p
                      key={index}
                      className={`font-normal text-xs cursor-pointer ${
                        tag === "Google" ? "text-[#8EC2F2]" : "text-second-text"
                      }`}
                    >
                      {tag}
                    </p>
                  ))}
                </div>
                <h4 className="font-medium text-xl text-[#252B42]">{item.title}</h4>
                <p className="font-normal text-xs text-second-text">{item.desc}</p>
                <div className="flex justify-between">
                  <div className="font-normal text-xs text-second-text">
                    <i className="bx bx-alarm text-primary-color"></i> {item.date}
                  </div>
                  <div className="font-normal text-xs text-second-text">
                    <i className="bx bx-line-chart text-[#23856D]"></i>{" "}
                    {item.comments} comments
                  </div>
                </div>
                <NavLink
                  to={item.link}
                  className="flex font-bold text-sm text-second-text items-center"
                >
                  Learn More
                  <i className="bx bx-chevron-right text-primary-color text-2xl" />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
