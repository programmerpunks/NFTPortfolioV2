import React from "react";
import { FaTwitter } from "react-icons/fa";

const TeamCard = ({ name, about, img, twitter_link }) => {
  return (
    <div className="bg-[#1D1533] rounded-md text-gray-600 p-5">
      <div className="rounded-md">
        <img className="rounded-md w-full" src={img} alt="" />
      </div>
      <div className="rounded-md bg-[#140B2B] text-center flex-col justify-center p-5 space-y-2">
        <div className="text-white font-bold">{name}</div>
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
