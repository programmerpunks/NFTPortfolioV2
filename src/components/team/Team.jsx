import React from "react";
import TeamCard from "./TeamCard";
import { TeamMember } from "./TeamDetails";

const Team = () => {
  return (
    <div className="mx-[10%]">
      <div className="font-bold text-white text-3xl text-center py-10">
        MEET OUR TEAM
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {TeamMember.map((member) => {
          return (
            <TeamCard
              name={member.name}
              about={member.about}
              img={member.img_url}
              twitter_link={member.twitter_link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Team;
