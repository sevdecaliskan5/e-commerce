import Footer from "../layout/Footer";
import InnerHeader from "../layout/InnerHeader";
import ContactHeader from "../components/ContactHeader"
import ContactCTA from "../components/ContactCTA";
import Contact from "../components/Contact";


function ContactPage() {
  return (
    <>
<InnerHeader/>
<ContactHeader/>
<Contact/>
<ContactCTA/>
<Footer/>
</>
  );
}

export default ContactPage;