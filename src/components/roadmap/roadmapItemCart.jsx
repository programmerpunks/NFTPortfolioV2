import React from "react";

const rock = require("../../images/roadmap/roadmapRock.png");
const RoadMapItemCart = ({ numbered, phase, points, title }) => {
  return (
    <>
      <div
        className="flex justify-center flex-col px-2 py-4"
        data-aos="fade-up"
      >
        <div className="flex justify-between px-5">
          <span className="flex justify-center items-center bg-[#DBFF00] border-[1px] text-black border-red-500 px-6 text-[50px] rounded-[35%]">
            {phase}
          </span>
          <div className="flex flex-col w-full items-center justify-center px-3">
            <div className="flex px-2 opacity-70 text-[#848484] font-bold w-full">
              {numbered}
            </div>
            <div className="flex px-2 w-full font-bold">{title}</div>
          </div>
        </div>
        <ul className="flex pl-[15px] flex-col m-auto list-disc pt-10 ">
          {points.map((pnt) => {
            return (
              <li key={pnt} className="py-1">
                {pnt}
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center p-2 pt-5 rotate-135">
          <img src={rock} alt="/" className="animate-pulse delay-[2000ms]" />
        </div>
      </div>
    </>
  );
};

export default RoadMapItemCart;
