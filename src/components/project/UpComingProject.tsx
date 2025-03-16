import React from "react";
import MapLine from "../about/MapLine.tsx";
import { BhayanderComingProject, GhatkoparComingProject, MiraRoadComingProject, NaigaonComingProject, ThaneComingProject, VasaiComingProject } from "../../utils/consents.ts";


const UpComingProject = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-12">
         <div className="space-y-3">
        <h3 className="text-xl font-bold text-center">Vasai Coming Project</h3>
        <MapLine
       lat={19.3667}
       lng={72.978}
          mapArrayValue={VasaiComingProject}
        />
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-center">Thane Project</h3>
        <MapLine
          lat={ 19.2183}
          lng={72.8}
          mapArrayValue={ThaneComingProject}
        />
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-center">MiraRoad Coming Project</h3>
        <MapLine
               lat={19.2853}
               lng={72.8688}
          mapArrayValue={MiraRoadComingProject}
        />
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-center">Naigaon Coming Project</h3>
        <MapLine
               lat={19.3906}
               lng={ 72.8485}
          mapArrayValue={NaigaonComingProject}
        />
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-center">Bhayander Coming Project</h3>
        <MapLine
               lat={19.3062}
               lng={72.8511}
          mapArrayValue={BhayanderComingProject}
        />
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-center">Ghatkopar Coming Project</h3>
        <MapLine
               lat={19.0866}
               lng={72.9083}
          mapArrayValue={GhatkoparComingProject}
        />
      </div>
    </div>
  );
};

export default UpComingProject;
