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
     <Banner />
 <JourneySection />
 <ExpertiseSection />
 <SwiperSidlerImage />
 <Innovations />
 <LocationExplorer />
 <TestimonialSlider />
 <Gallery />
 <Partner />
 <Blog news={News_Blog}  /></>
  )
}

export default Home