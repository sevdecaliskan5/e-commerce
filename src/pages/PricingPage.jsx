import Footer from "../layout/Footer";
import InnerHeader from "../layout/InnerHeader";
import PricingHeader from "../components/PricingHeader";
import Pricing from "../components/Pricing";
import AboutClients from "../components/AboutClients";
import PricingFaq from "../components/PricingFaq";
import TeamCTA from "../components/TeamCTA";


function PricingPage() {
  return (
    <>
<InnerHeader/>
<PricingHeader/>
<Pricing/>
<AboutClients />
<PricingFaq/>
<TeamCTA/>
<Footer/>
</>
  );
}

export default PricingPage;