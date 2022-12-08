import React from "react";
import Welcome from "../components/Welcome";
import OurServices from "../components/OurServices";
import WhyUs from "../components/WhyUs";
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import Testimonial from "../components/Testimonial";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Binar Car Rental - Home";
  }, []);
  return (
    <>
      <Welcome isButton={true} />
      <OurServices />
      <WhyUs />
      <Testimonial />
      <Banner />
      <Faq />
    </>
  );
};

export default Home;
