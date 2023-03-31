import React from "react";
import { useNavigate } from "react-router-dom";

import { BsMedium, BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

const logo = require("../../images/navbar/moonRobotsLogo.png");

const Navbar = ({
  connection,
  disconnect,
  getTokens,
  logout,
  readContract,
  wallet,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex bg-transparent text-white pt-5 mb-[5%]">
        <div className="flex justify-evenly w-full items-center flex-col sm:flex-row">
          <a
            href={window.location.pathname === "/mint" ? "/#TEAM " : "#TEAM"}
            className="flex justify-center p-2 text-[16px] md:text-xl font-bold hover:scale-125 duration-1000 cursor-pointer"
          >
            Our Team
          </a>
          <a
            href={
              window.location.pathname === "/mint" ? "/#UTILITY " : "#UTILITY"
            }
            className="flex justify-center p-2 text-[16px] md:text-xl font-bold hover:scale-125 duration-1000 cursor-pointer"
          >
            Docs
          </a>
        </div>
        <div className="flex md:w-[30%] justify-center p-4">
          <a href="/">
            <img
              src={logo}
              alt="/"
              className="hover:scale-125 duration-300 cursor-pointer"
            />
          </a>
        </div>
        <div className="flex w-full justify-center p-1 pr-4">
          <div className="flex flex-col justify-center">
            <div className="flex justify-between">
              <button
                onClick={() => {
                  navigate("/mint");
                }}
                className="hidden md:flex hover:scale-125 duration-300 rounded-2xl px-3 items-center text-black bg-[#DBFF00]"
              >
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
            <button
              onClick={async () => {
                logout
                  ? (async function () {
                      await disconnect();
                    })()
                  : (async function () {
                      await connection();
                      await readContract();
                      await getTokens();
                    })();
              }}
              className={`flex border-[1px] p-1 hover:scale-125 duration-700 rounded-2xl px-2 justify-center mt-5 text-white bg-transparent cursor-pointer ${
                logout ? "hover:before:content-['Disconnect:']" : ""
              }`}
            >
              {wallet}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
