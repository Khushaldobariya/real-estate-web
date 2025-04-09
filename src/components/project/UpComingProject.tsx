import React from "react";
import MapLine from "../about/MapLine.tsx";
import {
  BhayanderComingProject,
  GhatkoparComingProject,
  MiraRoadComingProject,
  NaigaonComingProject,
  ThaneComingProject,
  VasaiComingProject,
} from "../../utils/consents.ts";

const UpComingProject = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-12">
      <div className="space-y-3">
        <h3 className=" sm:text-base md:text-lg lg:text-3xl  font-bold text-center">
          Vasai Coming Project
        </h3>
        {VasaiComingProject.map((project, index) => (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* For even indexes, image on left and map on right */}
            {index % 2 === 0 ? (
              <>
                <div className="bg-gray-100 overflow-hidden shadow-md h-64 md:h-80 relative group">
                  <img
                    src={`/assets/images/project/project${index + 1}.webp`}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/images/placeholder.webp";
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h4 className="text-white text-xl font-semibold">
                      {project.name}
                    </h4>
                  </div>
                </div>
                <div className="h-64 md:h-80 overflow-hidden shadow-md">
                  <MapLine
                    description={project?.description}
                    name={project?.name}
                    year={project?.year}
                    lat={project.lat}
                    lng={project.lng}
                    // mapArrayValue={project.data}
                  />
                </div>
              </>
            ) : (
              /* For odd indexes, map on left and image on right */
              <>
                <div className="h-64 md:h-80  overflow-hidden shadow-md">
                  <MapLine
                    description={project?.description}
                    name={project?.name}
                    year={project?.year}
                    lat={project.lat}
                    lng={project.lng}
                    // mapArrayValue={project.data}
                  />
                </div>
                <div className="bg-gray-100 overflow-hidden shadow-md h-64 md:h-80 relative group">
                  <img
                    src={`/assets/images/project/project${index + 1}.webp`}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/images/placeholder.webp";
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h4 className="text-white text-xl font-semibold">
                      {project.name}
                    </h4>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="space-y-3">
        <h3 className=" sm:text-base md:text-lg lg:text-3xl  font-bold text-center">
          Thane Project
        </h3>
        {/* <MapLine lat={19.2183} lng={72.8} mapArrayValue={ThaneComingProject} /> */}
        {ThaneComingProject.map((project, index) => (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* For even indexes, image on left and map on right */}
            {index % 2 === 0 ? (
              <>
                <div className="bg-gray-100 overflow-hidden shadow-md h-64 md:h-80 relative group">
                  <img
                    src={`/assets/images/project/project${index + 1}.webp`}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/images/placeholder.webp";
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h4 className="text-white text-xl font-semibold">
                      {project.name}
                    </h4>
                  </div>
                </div>
                <div className="h-64 md:h-80 overflow-hidden shadow-md">
                  <MapLine
                    description={project?.description}
                    name={project?.name}
                    year={project?.year}
                    lat={project.lat}
                    lng={project.lng}
                    // mapArrayValue={project.data}
                  />
                </div>
              </>
            ) : (
              /* For odd indexes, map on left and image on right */
              <>
                <div className="h-64 md:h-80  overflow-hidden shadow-md">
                  <MapLine
                    description={project?.description}
                    name={project?.name}
                    year={project?.year}
                    lat={project.lat}
                    lng={project.lng}
                    // mapArrayValue={project.data}
                  />
                </div>
                <div className="bg-gray-100 overflow-hidden shadow-md h-64 md:h-80 relative group">
                  <img
                    src={`/assets/images/project/project${index + 1}.webp`}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/images/placeholder.webp";
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h4 className="text-white text-xl font-semibold">
                      {project.name}
                    </h4>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="space-y-3">
        <h3 className=" sm:text-base md:text-lg lg:text-3xl  font-bold text-center">
          MiraRoad Coming Project
        </h3>
        {/* <MapLine
          lat={19.2853}
          lng={72.8688}
          mapArrayValue={MiraRoadComingProject}
        /> */}
        {MiraRoadComingProject.map((project, index) => (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* For even indexes, image on left and map on right */}
            {index % 2 === 0 ? (
              <>
                <div className="bg-gray-100 overflow-hidden shadow-md h-64 md:h-80 relative group">
                  <img
                    src={`/assets/images/project/project${index + 1}.webp`}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/images/placeholder.webp";
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h4 className="text-white text-xl font-semibold">
                      {project.name}
                    </h4>
                  </div>
                </div>
                <div className="h-64 md:h-80 overflow-hidden shadow-md">
                  <MapLine
                    description={project?.description}
                    name={project?.name}
                    year={project?.year}
                    lat={project.lat}
                    lng={project.lng}
                    // mapArrayValue={project.data}
                  />
                </div>
              </>
            ) : (
              /* For odd indexes, map on left and image on right */
              <>
                <div className="h-64 md:h-80  overflow-hidden shadow-md">
                  <MapLine
                    description={project?.description}
                    name={project?.name}
                    year={project?.year}
                    lat={project.lat}
                    lng={project.lng}
                    // mapArrayValue={project.data}
                  />
                </div>
                <div className="bg-gray-100 overflow-hidden shadow-md h-64 md:h-80 relative group">
                  <img
                    src={`/assets/images/project/project${index + 1}.webp`}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/images/placeholder.webp";
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h4 className="text-white text-xl font-semibold">
                      {project.name}
                    </h4>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="space-y-3">
        <h3 className=" sm:text-base md:text-lg lg:text-3xl  font-bold text-center">
          Naigaon Coming Project
        </h3>
        {/* <MapLine
          lat={19.3906}
          lng={72.8485}
          mapArrayValue={NaigaonComingProject}
        /> */}
        {NaigaonComingProject.map((project, index) => (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* For even indexes, image on left and map on right */}
            {index % 2 === 0 ? (
              <>
                <div className="bg-gray-100 overflow-hidden shadow-md h-64 md:h-80 relative group">
                  <img
                    src={`/assets/images/project/project${index + 1}.webp`}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/images/placeholder.webp";
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h4 className="text-white text-xl font-semibold">
                      {project.name}
                    </h4>
                  </div>
                </div>
                <div className="h-64 md:h-80 overflow-hidden shadow-md">
                  <MapLine
                    description={project?.description}
                    name={project?.name}
                    year={project?.year}
                    lat={project.lat}
                    lng={project.lng}
                    // mapArrayValue={project.data}
                  />
                </div>
              </>
            ) : (
              /* For odd indexes, map on left and image on right */
              <>
                <div className="h-64 md:h-80  overflow-hidden shadow-md">
                  <MapLine
                    description={project?.description}
                    name={project?.name}
                    year={project?.year}
                    lat={project.lat}
                    lng={project.lng}
                    // mapArrayValue={project.data}
                  />
                </div>
                <div className="bg-gray-100 overflow-hidden shadow-md h-64 md:h-80 relative group">
                  <img
                    src={`/assets/images/project/project${index + 1}.webp`}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/images/placeholder.webp";
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h4 className="text-white text-xl font-semibold">
                      {project.name}
                    </h4>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="space-y-3">
        <h3 className=" sm:text-base md:text-lg lg:text-3xl  font-bold text-center">
          Bhayander Coming Project
        </h3>
        {/* <MapLine
          lat={19.3062}
          lng={72.8511}
          mapArrayValue={BhayanderComingProject}
        /> */}
        {BhayanderComingProject.map((project, index) => (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* For even indexes, image on left and map on right */}
            {index % 2 === 0 ? (
              <>
                <div className="bg-gray-100 overflow-hidden shadow-md h-64 md:h-80 relative group">
                  <img
                    src={`/assets/images/project/project${index + 1}.webp`}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/images/placeholder.webp";
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h4 className="text-white text-xl font-semibold">
                      {project.name}
                    </h4>
                  </div>
                </div>
                <div className="h-64 md:h-80 overflow-hidden shadow-md">
                  <MapLine
                    description={project?.description}
                    name={project?.name}
                    year={project?.year}
                    lat={project.lat}
                    lng={project.lng}
                    // mapArrayValue={project.data}
                  />
                </div>
              </>
            ) : (
              /* For odd indexes, map on left and image on right */
              <>
                <div className="h-64 md:h-80  overflow-hidden shadow-md">
                  <MapLine
                    description={project?.description}
                    name={project?.name}
                    year={project?.year}
                    lat={project.lat}
                    lng={project.lng}
                    // mapArrayValue={project.data}
                  />
                </div>
                <div className="bg-gray-100 overflow-hidden shadow-md h-64 md:h-80 relative group">
                  <img
                    src={`/assets/images/project/project${index + 1}.webp`}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/images/placeholder.webp";
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h4 className="text-white text-xl font-semibold">
                      {project.name}
                    </h4>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="space-y-3">
        <h3 className=" sm:text-base md:text-lg lg:text-3xl  font-bold text-center">
          Ghatkopar Coming Project
        </h3>
        {/* <MapLine
          lat={19.0866}
          lng={72.9083}
          mapArrayValue={GhatkoparComingProject}
        /> */}
        {GhatkoparComingProject.map((project, index) => (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* For even indexes, image on left and map on right */}
            {index % 2 === 0 ? (
              <>
                <div className="bg-gray-100 overflow-hidden shadow-md h-64 md:h-80 relative group">
                  <img
                    src={`/assets/images/project/project${index + 1}.webp`}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/images/placeholder.webp";
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h4 className="text-white text-xl font-semibold">
                      {project.name}
                    </h4>
                  </div>
                </div>
                <div className="h-64 md:h-80 overflow-hidden shadow-md">
                  <MapLine
                    description={project?.description}
                    name={project?.name}
                    year={project?.year}
                    lat={project.lat}
                    lng={project.lng}
                    // mapArrayValue={project.data}
                  />
                </div>
              </>
            ) : (
              /* For odd indexes, map on left and image on right */
              <>
                <div className="h-64 md:h-80  overflow-hidden shadow-md">
                  <MapLine
                    description={project?.description}
                    name={project?.name}
                    year={project?.year}
                    lat={project.lat}
                    lng={project.lng}
                    // mapArrayValue={project.data}
                  />
                </div>
                <div className="bg-gray-100 overflow-hidden shadow-md h-64 md:h-80 relative group">
                  <img
                    src={`/assets/images/project/project${index + 1}.webp`}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/images/placeholder.webp";
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h4 className="text-white text-xl font-semibold">
                      {project.name}
                    </h4>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpComingProject;
