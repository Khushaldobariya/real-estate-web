import React from 'react'
import MapLine from '../about/MapLine.tsx'
import { BhayanderCompleteProject, MaladCompleteProject, MiraRoadCompleteProject, VasaiCompleteProject } from '../../utils/consents.ts'

const CompleteProject = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-12">
    <div>
      <h3 className="text-xl font-bold text-center">Vasai Project</h3>
      <MapLine
        lat={19.3667}
        lng={72.8}
        mapArrayValue={VasaiCompleteProject}
      />
    </div>
    <div>
      <h3 className="text-xl font-bold text-center">Mira Road Project</h3>
      <MapLine
        lat={19.2952}
        lng={72.8544}
        mapArrayValue={MiraRoadCompleteProject}
      />
    </div>
    <div>
      <h3 className="text-xl font-bold text-center">Malad Project</h3>
      <MapLine lat={19.1861} lng={72.8484} mapArrayValue={MaladCompleteProject} />
    </div>

    <div>
      <h3 className="text-xl font-bold text-center">Bhayander Project</h3>
      <MapLine lat={19.312} lng={72.851} mapArrayValue={BhayanderCompleteProject} />
    </div>
  </div>
  )
}

export default CompleteProject