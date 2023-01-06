import React from "react";
import Phase from "./Phase";
import { Roadmap } from "./Roadmap";

const RoadMap = () => {
  return (
    <div className="mx-[10%] ">
      <h1 className="text-white text-center font-bold text-3xl py-10">
        Roadmap
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {Roadmap.map((phase) => {
          return <Phase phase_no={phase.phase} paragraph={phase.paragraph} />;
        })}
      </div>
    </div>
  );
};

export default RoadMap;
