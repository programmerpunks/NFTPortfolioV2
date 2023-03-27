import React from "react";

import { footerData, footerMenu } from "../../content/Footer";
import { links } from "../../content/SocialLinks";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-wrap flex-col py-[10%] w-full md:w-[40%]">
          <div className="flex  justify-center md:justify-start px-5 font-bold text-2xl text-white">
            {footerData.contact}
          </div>
          <div className="flex flex-wrap flex-col md:flex-row justify-center items-center">
            {links.map((lnk) => {
              return (
                <div className="flex justify-evenly m-2 px-5 p-2 border-2 cursor-pointer">
                  <div className="flex justify-center items-center text-white">
                    {lnk.icon}
                  </div>
                  <div className="flex text-white px-1">{lnk.title}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center w-full md:w-[30%]">
          <img src={footerData.image} alt="/" />
        </div>
        <div className="flex justify-center flex-col px-10">
          <div className="flex text-center w-full justify-center font-bold py-2 pb-4 text-4xl text-white">
            {footerData.menu}
          </div>
          <ul className="flex items-center py-1 text-white flex-col w-full px-2">
            {footerMenu.map((menu) => {
              return (
                <li className="text-white cursor-pointer py-1 hover:text-[#DBFF00]">
                  {menu.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
