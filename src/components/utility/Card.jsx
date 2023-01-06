import React from "react";

const Card = ({ heading, about }) => {
  return (
    <div
      className="rounded-lg bg-[#4e2b83] text-white bg-opacity-40 p-5 space-y-5 text-center"
      data-aos="fade-up"
    >
      <div className="md:w-[70%] md:mx-auto">
        <div className="flex justify-center pb-5">
          <h1 className="font-semibold border-t-4 border-b-4 p-2 border-rose-900 text-yellow-400">
            {heading}
          </h1>
        </div>
        <div>{about}</div>
      </div>
    </div>
  );
};

export default Card;
