import React from "react";
import RoadMap from "./components/roadmap/RoadMap";
import Team from "./components/team/Team";
import Utility from "./components/utility/Utility";

function App() {
  return (
    <div className="bg-[#0C0324]">
      <Utility />
      <RoadMap />
      <Team />
    </div>
  );
}

export default App;
