import Footer from "../layout/Footer";
import InnerHeader from "../layout/InnerHeader";
import ContactHeader from "../components/ContactHeader"
import ContactCTA from "../components/ContactCTA";
import ContactMail from "../components/ContactMail";


function Contact() {
  return (
    <>
<InnerHeader/>
<ContactHeader/>
<ContactMail/>
<ContactCTA/>
<Footer/>
</>
  );
}

export default Contact;