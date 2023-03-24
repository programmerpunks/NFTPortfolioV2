import React from "react";

const partner1 = require("../../images/hero/partner1.png");
const partner2 = require("../../images/hero/partner2.png");
const partner3 = require("../../images/hero/partner3.png");
const partner4 = require("../../images/hero/partner4.png");
const model = require("../../images/hero/landingModel.png")
const model2 = require("../../images/hero/LandingModel2.png")

const Landing = () => {
  return (
    <>
      <div className="flex w-full bg-moon-img bg-no-repeat bg-center bg-contain  justify-center text-white">
            <div className="hidden md:flex w-[20%] justify-center animate-[wiggle_1s_ease-in-out_infinite]">
              <img src={model2} alt="/" className="object-contain" />
            </div>
          <div className="flex flex-col pt-[10%] justify-center ">
            <div className="flex text-6xl md:text-8xl text-center">
              To The Moon!
            </div>    
            <div className="flex justify-center flex-col">
              <div className="flex justify-center">
                Public Sale sold out in 1 hour 58 minutes 
              </div>
              <div className="flex justify-center "> 
                <div className="flex hover:scale-110 flex-wrap cursor-pointer duration-500 border-dotted justify-center border-b">
                  Read more on Medium
                </div>
              </div>
            </div>
            <div className="flex justify-evenly w-full p-5 flex-col md:flex-row">
              <button className="flex p-4 justify-center rounded-xl px-10 bg-transparent border-[1px] hover:scale-110 duration-500">
                Claim Pre-mint
              </button>
              <button className="flex p-4 mt-2 md:mt-0 px-14 text-black justify-center rounded-xl bg-[#DBFF00]  hover:scale-110 duration-500">
                Enter game
              </button>
            </div>
            <div className="flex justify-center w-full flex-col flex-wrap p-4">
              <div className="flex justify-center opacity-70 font-bold">
                IN PARTNERSHIP WITH:
              </div>
              <div className="flex justify-evenly h-1/2 pt-5 px-10">
                <img src={partner1} alt="/" />
                <img src={partner2} alt="/" />
                <img src={partner3} alt="/" />
                <img src={partner4} alt="/" />
              </div>
            </div>
        </div>
        <div className="hidden md:flex w-[20%] justify-center">
              <img src={model} alt="/" className="object-contain" />
            </div>
      </div>
    </>
  );
};

export default Landing;
