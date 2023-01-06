import React from "react";

const Phase = ({ phase_no, paragraph }) => {
  return (
    <div className="text-gray-500 rounded-lg bg-[#ffffff12] p-5 space-y-5 text-center ">
      <div className="md:w-[70%] md:mx-auto">
        <div className="flex justify-center pb-5">
          <h1 className="font-semibold border-t-4 border-b-4 p-2 border-rose-900">
            Phase {phase_no}
          </h1>
        </div>
        <div>{paragraph}</div>
      </div>
    </div>
  );
};

export default Phase;
