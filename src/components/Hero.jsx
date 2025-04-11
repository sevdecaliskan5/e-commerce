import React from "react";
import { Images } from "../assets/Images";
import Slider from './Slider';
import HomeHeader from "../layout/HomeHeader";

const heroSlides = [
   {
     id: 1,
     image: Images.sliders.sliderTop1,
     title: "NEW COLLECTION",
     subtitle: "SUMMER 2025",
     description: "We know how large objects will act, but things on a small scale.",
     buttonText: "SHOP NOW",
     buttonLink: "/productlist",
     altText: "Summer Collection 2025"
   },
   {
     id: 2,
     image: Images.sliders.sliderTop2,
     title: "NEW COLLECTION",
     subtitle: "SUMMER 2025",
     description: "We know how large objects will act, but things on a small scale.",
     buttonText: "SHOP NOW",
     buttonLink: "/productlist",
     altText: "Summer Collection 2025"
   }
 ];

 function Hero() {
  return (
    <div>
      <HomeHeader />
      <Slider 
         slides={heroSlides}
         containerClassName="relative w-full h-screen overflow-hidden"
         slideClassName="w-full h-screen flex-shrink-0 relative"
         imageClassName="w-full h-full object-cover"
         contentClassName="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-4"
         buttonClassName="inline-block bg-[#2DC071] px-8 py-3 rounded text-white font-bold hover:bg-[#23856D] transition-colors duration-300"
         showIndicators={true}
         showNavigation={true}
         autoPlay={true}
         autoPlayInterval={5000}
       />
     </div>
   );
 }

 export default Hero;