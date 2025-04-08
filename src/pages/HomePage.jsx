import Footer from "../layout/Footer";
import Hero from "../components/Hero";
import EditorsPick from "../components/EditorsPick";
import HomeBestSellers from "../layout/HomeBestSellers";
import SliderHomeTwo from "../components/SliderHomeTwo";
import FeaturedPosts from "../components/FeaturedPosts";
import PartOf from "../components/PartOf";

function HomePage() {
  return (
    <>
      <Hero />
      <EditorsPick />
      <HomeBestSellers />
      <SliderHomeTwo />
      <PartOf />
      <FeaturedPosts />
      <Footer />
    </>
  );
}

export default HomePage;