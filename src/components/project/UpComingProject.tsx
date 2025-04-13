import React, { useState } from "react";

import {
  BhayanderComingProject,
  GhatkoparComingProject,
  MiraRoadComingProject,
  NaigaonComingProject,
  ThaneComingProject,
  VasaiComingProject,
} from "../../utils/consents.ts";
import { Project } from "../../utils/type.ts";
import ProjectLocationSection from "./ProjectLocationSection.tsx";

const UpComingProject = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(
    VasaiComingProject[0]
  );

  const handleProjectClick = (project: Project): void => {
    setSelectedProject(project);
  };
  return (
    <div className="max-w-7xl mx-auto space-y-12">
      <ProjectLocationSection
        title="Vasai Projects"
        projects={VasaiComingProject}
        selectedProject={selectedProject}
        onProjectClick={handleProjectClick}
      />
      <ProjectLocationSection
        title="Mira Road Projects"
        projects={MiraRoadComingProject}
        selectedProject={selectedProject}
        onProjectClick={handleProjectClick}
      />
      <ProjectLocationSection
        title="Naigaon Projects"
        projects={NaigaonComingProject}
        selectedProject={selectedProject}
        onProjectClick={handleProjectClick}
      />
      <ProjectLocationSection
        title="Ghatkopar Projects"
        projects={GhatkoparComingProject}
        selectedProject={selectedProject}
        onProjectClick={handleProjectClick}
      />

      <ProjectLocationSection
        title="Thane Projects"
        projects={ThaneComingProject}
        selectedProject={selectedProject}
        onProjectClick={handleProjectClick}
      />

      <ProjectLocationSection
        title="Bhayander Projects"
        projects={BhayanderComingProject}
        selectedProject={selectedProject}
        onProjectClick={handleProjectClick}
      />
    </div>
  );
};

export default UpComingProject;
