import AboutHeader from "../components/AboutHeader";
import AboutContent from "../components/AboutContent"
import AboutStats from "../components/AboutStats"
import { AboutVideo } from "../components/AboutVideo"
import Footer from "../layout/Footer";
import { AboutTeam } from "../components/AboutTeam";
import AboutClients from "../components/AboutClients";
import AboutTestimonials from "../components/AboutTestimonials";
import InnerHeader from "../layout/InnerHeader";


function AboutPage() {
  return (
    <>
<InnerHeader/>
<AboutHeader/>
<AboutContent/>
<AboutStats/>
<AboutVideo/>
<AboutTeam/>
<AboutClients/>
<AboutTestimonials/>
<Footer/>
</>
  );
}

export default AboutPage;