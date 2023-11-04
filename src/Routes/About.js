import Fiveg from "../Components/5g";
import Destination from "../Components/Destination";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Trip from "../Components/Trip";
import ProfileInfo  from '../Components/Portfolio_info';
import home_image from '../Assets/home.jpg';

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg= {home_image}
        title="Welcome To My Portfolio"
        ptext="Start Explore My Page"
      />
      <ProfileInfo />
      <Footer />
    </>
  );
}

export default About;
