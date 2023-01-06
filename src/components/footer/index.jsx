import React from "react";

import { BsMedium } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

const footer = require("../../images/footer/footer.png")
const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-wrap flex-col py-[10%] w-full md:w-[40%]">
          <div className="flex  justify-center md:justify-start px-5 font-bold text-2xl text-white">
            Contacts
          </div>
          <div className="flex flex-wrap flex-col md:flex-row justify-center items-center">
            <div className="flex justify-evenly mx-2 px-5 p-2 border-2 cursor-pointer">
              <FaDiscord
                size={20}
                className="flex justify-center items-center text-white"
              />
              <div className="flex text-white px-1">@ WildcatAlliance</div>
            </div>
            <div className="flex justify-evenly m-2 px-5 p-2 border-2 cursor-pointer">
              <BsTwitter size={20} className="flex text-white" />
              <div className="flex text-white px-1">@ WildcatAlliance</div>
            </div>

            <div className="flex justify-evenly m-2 px-5 p-2 border-2 cursor-pointer">
              <BsMedium size={20} className="flex text-white" />
              <div className="flex text-white px-1">@ WildcatAlliance</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full md:w-[30%]">
            <img src={footer} alt="/" />
        </div>
        <div className="flex justify-center flex-col px-10">
          <div className="flex text-center w-full justify-center font-bold py-2 pb-4 text-4xl text-white">
            Quick Menu
          </div>
          <ul className="flex items-center py-1 text-white flex-col w-full px-2">
            <li className="text-white cursor-pointer py-1 hover:text-[#DBFF00]">
              ABOUT
            </li>
            <li className="text-white cursor-pointer py-1  hover:text-[#DBFF00]">
              UTILITY
            </li>
            <li className="text-white cursor-pointer py-1 hover:text-[#DBFF00]">
              ROAD MAP
            </li>
            <li className="text-white cursor-pointer py-1 hover:text-[#DBFF00]">
              TEAM
            </li>
            <li className="text-white cursor-pointer py-1 hover:text-[#DBFF00]">
              WILDCAT LIST
            </li>
            <li className="text-white cursor-pointer py-1 hover:text-[#DBFF00]">
              CONTACT
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
