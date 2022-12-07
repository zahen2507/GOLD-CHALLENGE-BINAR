import Navigation from "../components/Navigation";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";
import BestCar from "../components/BestCar";
import WhyUs from "../components/WhyUs";
import Testimonial from "../components/Testimonial";
import Banner from "../components/Banner";

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <Welcome isButtonShow={true} />
      <BestCar />
      <WhyUs />
      <Testimonial />
      <Banner />
      <Faq />
      <Footer />
    </div>
  );
};

export default HomePage;
