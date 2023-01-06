import React from "react";
import { FaTwitter } from "react-icons/fa";

const TeamCard = ({ name, about, img, twitter_link }) => {
  return (
    <div
      className="bg-[#4e2b83] text-white bg-opacity-40 rounded-md p-5"
      data-aos="fade-up"
    >
      <div className="rounded-md">
        <img className="rounded-md w-full" src={img} alt="" />
      </div>
      <div className="rounded-md bg-[#140B2B] text-center flex-col justify-center p-5 space-y-2">
        <div className=" font-bold text-yellow-400">{name}</div>
        <div>{about}</div>
        <div className="flex justify-center">
          <div className="bg-[#AB17DF] hover:bg-white hover:cursor-pointer rounded-full w-fit p-1 ">
            <a href={twitter_link} target="_blank" rel="noreferrer">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
