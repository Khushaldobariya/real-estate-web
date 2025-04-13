import React, { useState } from "react";
import { AllComingProjects } from "../../utils/consents.ts";
import { Project } from "../../utils/type.ts";
import ProjectLocationSection from "./ProjectLocationSection.tsx";

const UpComingProject = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(
    AllComingProjects.find((project) => project.location.includes("Vasai")) ||
      AllComingProjects[0]
  );

  const handleProjectClick = (project: Project): void => {
    setSelectedProject(project);
  };
  
  const vasaiProjects = AllComingProjects.filter((project) =>
    project.location.includes("Vasai")
  );
  const miraRoadProjects = AllComingProjects.filter((project) =>
    project.location.includes("Mira Road")
  );
  const naigaonProjects = AllComingProjects.filter((project) =>
    project.location.includes("Naigaon")
  );
  const ghatkoparProjects = AllComingProjects.filter((project) =>
    project.location.includes("Ghatkopar")
  );
  const thaneProjects = AllComingProjects.filter((project) =>
    project.location.includes("Thane")
  );
  const bhayanderProjects = AllComingProjects.filter((project) =>
    project.location.includes("Bhayander")
  );

  return (
    <div className="mx-auto space-y-12">
      <ProjectLocationSection
        title="Vasai Projects"
        projects={vasaiProjects}
        selectedProject={selectedProject}
        onProjectClick={handleProjectClick}
      />
      <ProjectLocationSection
        title="Mira Road Projects"
        projects={miraRoadProjects}
        selectedProject={selectedProject}
        onProjectClick={handleProjectClick}
      />
      <ProjectLocationSection
        title="Naigaon Projects"
        projects={naigaonProjects}
        selectedProject={selectedProject}
        onProjectClick={handleProjectClick}
      />
      <ProjectLocationSection
        title="Ghatkopar Projects"
        projects={ghatkoparProjects}
        selectedProject={selectedProject}
        onProjectClick={handleProjectClick}
      />
      <ProjectLocationSection
        title="Thane Projects"
        projects={thaneProjects}
        selectedProject={selectedProject}
        onProjectClick={handleProjectClick}
      />
      <ProjectLocationSection
        title="Bhayander Projects"
        projects={bhayanderProjects}
        selectedProject={selectedProject}
        onProjectClick={handleProjectClick}
      />
    </div>
  );
};

export default UpComingProject;
