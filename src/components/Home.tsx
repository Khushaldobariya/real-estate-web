import React from 'react'
import Banner from './Banner.tsx'
import JourneySection from './JourneySection.tsx'
import ExpertiseSection from './ExpertiseSection.tsx'
import SwiperSidlerImage from './SwiperSidlerImage.tsx'
import Innovations from './InnovationsSection.tsx'
import LocationExplorer from './LocationExplorer.tsx'
import TestimonialSlider from './TestimonialSlider.tsx'
import Partner from './Partner.tsx'
import Gallery from './gallery/Gallery.tsx'
import Blog from './blog/Blog.tsx'
import { News_Blog } from '../utils/consents.ts'


const Home = () => {
  return (
    <>
    <div className="space-y-16">
     <Banner />
     <div className="container  mx-auto space-y-16">

 <JourneySection />
 <ExpertiseSection />
 <SwiperSidlerImage />
 <Innovations />
 <LocationExplorer />
 <TestimonialSlider />
 <Gallery />
 <Partner />  
 <Blog news={News_Blog}  />
     </div>
    </div>
 </>
  )
}

export default Home