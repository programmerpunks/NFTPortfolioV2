import React from "react";
import About from "./components/about";
import Footer from "./components/footer";
import Landing from "./components/landing";
import Navbar from "./components/navbar";
import RoadMap from "./components/roadmap";

function App() {
  return (
    <>
      <div className="bg-star-img bg-cover px-[1%] md:px-[10%] lg:px-[20%] w-full">
        <Navbar />
        <Landing />
        <About />
        <RoadMap />
        <Footer />
      </div>
    </>
  );
}

export default App;
