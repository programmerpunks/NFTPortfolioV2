import React from "react";
import AboutItemCart from "./aboutItemCart";

const item1 = require("../../images/about/aboutItem.png");
const item2 = require("../../images/about/aboutItem2.png");
const item3 = require("../../images/about/aboutItem3.png");
const item4 = require("../../images/about/aboutItem4.png");

const About = () => {
  return (
    <>
      <div className="flex md:py-32 lg:py-20 mt-8 rounded-xl justify-center w-full flex-wrap">
        <div className="flex flex-wrap lg:h-[320px] relative bg-transparent lg:bg-[#4e2b83] rounded-xl">
          <AboutItemCart img={item1} title={"Robot Egg"} />
          <AboutItemCart img={item2} title={"Farm Items"} />
          <AboutItemCart img={item3} title={"Moon Lands"} />
          <AboutItemCart img={item4} title={"Moon Robots"} />
        </div>
      </div>
    </>
  );
};

export default About;
