import React from "react";

import { aboutData } from "../../content/About";
import AboutItemCart from "./aboutItemCart";

const About = () => {
  return (
    <>
      <div className="flex md:py-32 lg:py-20 mt-8 rounded-xl justify-center w-full flex-wrap" id='ABOUT'>
        <div className="flex flex-wrap lg:h-[320px] relative bg-transparent lg:bg-[#4e2b83] rounded-xl">
          {aboutData.map((itm) => {
            return <AboutItemCart img={itm.image} title={itm.title} details={itm.description} />;
          })}
        </div>
      </div>
    </>
  );
};

export default About;
