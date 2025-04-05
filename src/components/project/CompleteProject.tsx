import React from 'react'
import MapLine from '../about/MapLine.tsx'
import { BhayanderCompleteProject, MaladCompleteProject, MiraRoadCompleteProject, VasaiCompleteProject } from '../../utils/consents.ts'

const CompleteProject = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-12">
    <div className="space-y-3">
      <h3 className=" sm:text-base md:text-lg lg:text-3xl   text-center">Vasai Project</h3>
      <MapLine
        lat={19.3667}
        lng={72.8}
        mapArrayValue={VasaiCompleteProject}
      />
    </div>
    <div className="space-y-3">
      <h3 className=" sm:text-base md:text-lg lg:text-3xl   text-center">Mira Road Project</h3>
      <MapLine
        lat={19.2952}
        lng={72.8544}
        mapArrayValue={MiraRoadCompleteProject}
      />
    </div>
    <div className="space-y-3">
      <h3 className=" sm:text-base md:text-lg lg:text-3xl   text-center">Malad Project</h3>
      <MapLine lat={19.3052} lng={72.8505} mapArrayValue={MaladCompleteProject} />
    </div>

    <div className="space-y-3">
      <h3 className=" sm:text-base md:text-lg lg:text-3xl   text-center">Bhayander Project</h3>
      <MapLine lat={19.3081} lng={72.8630} mapArrayValue={BhayanderCompleteProject} />
    </div>
  </div>
  )
}

export default CompleteProject