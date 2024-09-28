import React from "react";
import HomeHero from "../components/Hero/Hero";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Testimonials from "../components/Testimonials/Testimonials";
import CallToAction from "../components/calltoActions/CallToAction";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <FeaturedProducts />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;
