import React, { useState } from "react";
import { Images } from "../assets/Images";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

const items = [
  {
    src: Images.sliders.slider2,
    collection: "SUMMER 2025",
    header: "Vita Classic Product",
    description:
      "We know how large objects will act, We know how are objects will act, We know",
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: Images.sliders.slider2_1,
    collection: "SUMMER 2025",
    header: "Vita Classic Product ",
    description:
      "We know how large objects will act, We know how are objects will act, We know",
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
];

function SliderHomeTwo(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
        <div className="flex items-center justify-start relative bg-[#23856D] h-[711px] ">
          <div className="w-full">
            <img
              src={item.src}
              alt={item.altText}
              className="w-[443px] h-[685px] absolute top-[86px] right-[215px]"
            />
          </div>
          <div className=" flex flex-col gap-9 my-9 ml-[15%] absolute">
            <h5 className="text-white text-base font-bold leading-normal ">
              {item.collection}
            </h5>
            <h1 className="text-white text-[58px] font-bold leading-normal  w-[80%]">
              {item.header}
            </h1>
            <h4 className="text-neutral-50 text-[14px] font-normal leading-[20px]  w-[60%]">
              {item.description}
            </h4>
            <div className="flex items-center gap-[34px]">
              <p className="text-[24px] text-white font-bold">$16.48</p>
              <button className="bg-[#2DC071] px-[40px] py-[15px]  text-center rounded text-white text-2xl font-bold leading-loose ">
                ADD TO CART
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default SliderHomeTwo;