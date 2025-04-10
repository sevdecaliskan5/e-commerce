import Footer from "../layout/Footer";
import Hero from "../components/Hero";
import EditorsPick from "../components/EditorsPick";
import HomeBestSellers from "../layout/HomeBestSellers";
import Slider from "../components/Slider";
import FeaturedPosts from "../components/FeaturedPosts";
import PartOf from "../components/PartOf";
import Images from "../assets/Images";

const sliderTwoSlides = [
  {
    id: 1,
    image: Images.sliders.sliderBottom1,
    title: "Vita Classic Product",
    subtitle: "SUMMER 2025",
    description: "We know how large objects will act, We know how are objects will act, We know",
    buttonText: "ADD TO CART",
    buttonLink: "/productlist",
    altText: "Vita Classic Product",
    price: "$16.48"
  },
  {
    id: 2,
    image: Images.sliders.sliderBottom2,
    title: "Vita Classic Product",
    subtitle: "SUMMER 2025",
    description: "We know how large objects will act, We know how are objects will act, We know",
    buttonText: "ADD TO CART",
    buttonLink: "/productlist",
    altText: "Vita Classic Product",
    price: "$16.48"
  }
];

function HomePage() {
  return (
    <>
      <Hero />
      <EditorsPick />
      <HomeBestSellers />
      <div className="mt-20">
         <Slider 
           slides={sliderTwoSlides}
           containerClassName="relative w-full h-[711px] overflow-hidden bg-[#23856D]"
           slideClassName="w-full h-full flex-shrink-0 relative"
           imageClassName="w-[443px] h-[685px] absolute top-[86px] right-[215px]"
           contentClassName="flex flex-col gap-9 my-9 ml-[15%] absolute"
           buttonClassName="bg-[#2DC071] px-[40px] py-[15px] text-center rounded text-white text-2xl font-bold leading-loose hover:bg-[#23856D] transition-colors duration-300"
           showIndicators={true}
           showNavigation={true}
           autoPlay={true}
           autoPlayInterval={5000}
         />
       </div>
       <PartOf />
       <FeaturedPosts />
       <Footer />
       </>
   );
 }