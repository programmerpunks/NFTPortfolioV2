import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import About from "./components/about";
import Footer from "./components/footer";
import Landing from "./components/landing";
import Navbar from "./components/navbar";
import RoadMapCarosual from "./components/roadmap";
import RoadMap from "./components/roadmap/RoadMap";
import Team from "./components/team/Team";
import Utility from "./components/utility/Utility";

function App() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <div className="bg-star-img bg-cover px-[1%] md:px-[10%] lg:px-[20%] w-full">
        <Navbar />
        <Landing />
        <About />
        <RoadMapCarosual />
        <Utility />
        <RoadMap />
        <Team />
        <Footer />
      </div>
    </>
  );
}

export default App;
