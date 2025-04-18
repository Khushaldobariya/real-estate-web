import React, { useState, useEffect } from "react";
import Navbar from "../Navbar.tsx";

import { ProjectDataType } from "../../utils/type.ts";
import CompleteProject from "./CompleteProject.tsx";
import CurrentProject from "./CurrentProject.tsx";
import UpComingProject from "./UpComingProject.tsx";

const Project = () => {
  const [status, setStatus] = useState<"Completed" | "Current" | "Upcoming">(
    "Completed"
  );
  const [filteredProjects, setFilteredProjects] = useState<ProjectDataType[]>(
    []
  );

  // const filterProjects = () => {
  //   const filtered = CompleteProject.filter(
  //     (item: ProjectDataType) => item.project_status === status
  //   );
  //   setFilteredProjects(filtered);
  // };

  // useEffect(() => {
  //   filterProjects();
  // }, [status]);

  return (
    <div className="space-y-20 my-10">
      <Navbar isHome={false} />

      <div className="space-y-4 mt-28 px-5 container mx-auto md:px-20">
        <div className="flex justify-between items-center">
          <div className="mt-10">
            <p className=" text-sm md:text-base lg:text-lg">
              Home {">"} Project
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl ">
              Our <span className="text-[#a0238a]">Project</span>
            </h1>
          </div>
          <div>
            <button
              onClick={() => console.log("Book site visit clicked")}
              className="border border-black px-3 md:px-10 py-5 hover:text-white hover:bg-black transition-all delay-150"
            >
              Book site visit
            </button>
          </div>
        </div>

        <div className="border-b border-black">
          <p className="capitalize tracking-wider  text-base sm:text-lg md:text-xl">
            Our specialized team excels in understanding and developing areas,
            strategically placing our projects at the heart of each location.
          </p>
        </div>
      </div>
      <div className="space-y-12 container mx-auto ">
        <div className="w-full flex justify-around gap-10 pt-10">
          {["Completed", "Current", "Upcoming"].map((s) => (
            <button
              key={s}
              className={`p-2  delay-150 ease-in-out  text-base md:text-lg lg:text-2xl font-medium transition-all duration-300 ${
                status === s ? "font-semibold text-[#a0238a]" : " text-black"
              }`}
              onClick={() =>
                setStatus(s as "Completed" | "Current" | "Upcoming")
              }
            >
              {s}
            </button>
          ))}
        </div>

        {status == "Completed" && <CompleteProject />}

        {status == "Current" && <CurrentProject />}
        {status == "Upcoming" && <UpComingProject />}
      </div>

      {/* <div className="flex flex-col gap-10 py-24">
        {filteredProjects.map((item, index) => (
          <div key={item.id}>
            <ProjectCard index={index} projectInfo={item} />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Project;
