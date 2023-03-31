import React from "react";
import { useNavigate } from "react-router-dom";

import { landingData } from "../../content/Landing";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex h-screen md:h-max w-full bg-moon-img bg-no-repeat bg-center bg-contain  justify-center text-white">
        <div className="hidden md:flex w-[20%] justify-center animate-[wiggle_1s_ease-in-out_infinite]">
          <img
            src={landingData.firstModel}
            alt="/"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col pt-[10%] justify-center ">
          <div className="flex text-6xl md:text-8xl text-center">
            {landingData.title}
          </div>
          <div className="flex justify-center flex-col">
            <div className="flex justify-center">{landingData.description}</div>
            <div className="flex justify-center ">
              <div className="flex hover:scale-110 flex-wrap cursor-pointer duration-500 border-dotted justify-center border-b">
                {landingData.medium}
              </div>
            </div>
          </div>
          <div className="flex justify-evenly w-full p-5 flex-col md:flex-row">
            <button
              onClick={() => {
                navigate("/mint");
              }}
              className="flex p-4 justify-center rounded-xl px-10 bg-transparent border-[1px] hover:scale-110 duration-500"
            >
              {landingData.claimBtn}
            </button>
            <button className="flex p-4 mt-2 md:mt-0 px-14 text-black justify-center rounded-xl bg-[#DBFF00]  hover:scale-110 duration-500">
              {landingData.gameBtn}
            </button>
          </div>
          <div className="flex justify-center w-full flex-col flex-wrap p-4">
            <div className="flex justify-center opacity-70 font-bold">
              {landingData.partners}
            </div>
            <div className="flex justify-evenly h-1/2 pt-5 px-10">
              <img src={landingData.partner1} alt="/" />
              <img src={landingData.partner2} alt="/" />
              <img src={landingData.partner3} alt="/" />
              <img src={landingData.partner4} alt="/" />
            </div>
          </div>
        </div>
        <div className="hidden md:flex w-[20%] justify-center">
          <img
            src={landingData.secondModel}
            alt="/"
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Landing;
