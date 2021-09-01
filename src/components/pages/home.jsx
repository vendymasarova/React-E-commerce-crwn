import "../../App.css";
import HeroSection from "../HeroSection";

import "../Footer.css";

import React from "react";
import Cards from "../Cards";
import Footer from "../Footer";

function Home() {
  return (
    <div>
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
