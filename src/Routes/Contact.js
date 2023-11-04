import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="contact"
        heroImg="https://images.unsplash.com/photo-1508615070457-7baeba4003ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="Contact"
        btnClass="hide"
      />
      <Footer />
    </>
  );
}

export default Contact;
