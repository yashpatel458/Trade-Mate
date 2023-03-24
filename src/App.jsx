import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Predict } from "./components/predict/predict";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import MouseParticles from 'react-mouse-particles'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <Predict data={landingPageData.Predict} />
      <About data={landingPageData.About} />
      {/* <Gallery data={landingPageData.Gallery} /> */}
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
      <MouseParticles g={1} color={["#34D797", "#D32826"]} cull="col,image-wrapper"/>
    </div>
  );
};

export default App;
