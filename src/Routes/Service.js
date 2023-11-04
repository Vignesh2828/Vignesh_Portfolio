import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="service"
        heroImg="https://images.unsplash.com/photo-1614849286521-4c58b2f0ff15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="Service"
        btnClass="hide"
      />
      <Footer />
    </>
  );
}

export default Service;
