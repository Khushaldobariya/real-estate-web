import React from "react";
import { TeamMembers_list } from "../../utils/consents.ts";

const TeamMember = () => {
  return (
    <section>
       <div className="container mx-auto px-4 py-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {TeamMembers_list.map((member, index) => (
          <div key={index} className="flex flex-col items-center relative">
      
            <div className="relative w-80 h-96 border-[8px]  border-[#9d2390] bg-white">
   
              <div className=" absolute -top-28  w-full h-[28rem]">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

         
            <div className="w-80 text-center absolute -bottom-6 py-3 bg-gradient-to-b from-[#9d2390] to-white rounded-md ">
              <h3 className="text-lg font-bold text-black">{member.name}</h3>
              <p className="text-sm text-black">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default TeamMember;
