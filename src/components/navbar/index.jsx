import React from "react";

import { BsMedium } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

const logo = require("../../images/navbar/moonRobotsLogo.png");

const Navbar = () => {
  return (
    <>
      <div className="flex bg-transparent text-white pt-5 mb-[5%]">
        <div className="flex justify-evenly w-full items-center flex-col sm:flex-row">
          <div className="flex justify-center p-2 text-xl font-bold hover:scale-125 duration-1000 cursor-pointer">
            Play Game
          </div>
          <div className="flex justify-center font-bold text-xl p-2 hover:scale-125 duration-1000 cursor-pointer">
            Docs
          </div>
        </div>
        <div className="flex md:w-[30%] justify-center p-4">
          <img
            src={logo}
            alt="/"
            className="hover:scale-125 duration-300 cursor-pointer"
          />
        </div>
        <div className="flex w-full justify-center p-1 pr-4">
          <div className="flex flex-col justify-center">
            <div className="flex justify-between">
              <button className="flex hover:scale-125 duration-300 rounded-2xl px-3 items-center text-black bg-[#DBFF00]">
                Buy One
              </button>
              <div className="flex justify-around px-4">
                <BsMedium
                  size={20}
                  className="m-1 hover:scale-150 duration-300 cursor-pointer"
                />
                <FaDiscord
                  size={20}
                  className="m-1 hover:scale-150 duration-300 cursor-pointer"
                />
                <BsTwitter
                  size={20}
                  className="m-1 hover:scale-150 duration-300 cursor-pointer"
                />
              </div>
            </div>
            <button className="flex border-[1px] p-1 hover:scale-125 duration-700 rounded-2xl px-2 justify-center mt-5 text-white bg-transparent cursor-pointer">
              Connect Metamask
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
