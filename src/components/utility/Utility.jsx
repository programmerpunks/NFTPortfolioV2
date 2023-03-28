import React from "react";

import Card from "./Card";
import { utilityData } from "../../content/Utility";

const Utility = () => {
  return (
    <div className="mx-[10%]" id='UTILITY'>
      <h1 className="text-white text-center font-bold text-3xl py-10">
        Holder Utility
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-5">
        {utilityData.map((item) => {
          return <Card heading={item.heading} about={item.about} />;
        })}
      </div>
    </div>
  );
};

export default Utility;
