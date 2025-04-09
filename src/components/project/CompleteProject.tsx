import React from 'react'
import MapLine from '../about/MapLine.tsx'
import { BhayanderCompleteProject, MaladCompleteProject, MiraRoadCompleteProject, VasaiCompleteProject } from '../../utils/consents.ts'

const CompleteProject = () => {


  return (
    <div className="max-w-7xl mx-auto space-y-12 px-4 sm:px-6 lg:px-8 py-8">
      {VasaiCompleteProject.map((project, index) => (
        <div key={project.name} className="space-y-6">
          <h3 className="sm:text-base md:text-lg lg:text-3xl text-center font-semibold">{project.name}</h3>
          
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
                    <h4 className="text-white text-xl font-semibold">{project.name}</h4>
                  </div>
                </div>
                <div className="h-64 md:h-80 overflow-hidden shadow-md">
                  <MapLine
                    lat={project.lat}
                    lng={project.lng}
                 
                  />
                </div>
              </>
            ) : (
              /* For odd indexes, map on left and image on right */
              <>
                <div className="h-64 md:h-80  overflow-hidden shadow-md">
                  <MapLine
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
                    <h4 className="text-white text-xl font-semibold">{project.name}</h4>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CompleteProject