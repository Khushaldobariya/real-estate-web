import React from "react";

import JourneySection from "./JourneySection.tsx";
import ExpertiseSection from "./ExpertiseSection.tsx";
import SwiperSidlerImage from "./SwiperSidlerImage.tsx";
import Innovations from "./InnovationsSection.tsx";
import LocationExplorer from "./LocationExplorer.tsx";
import TestimonialSlider from "./TestimonialSlider.tsx";
import Partner from "./Partner.tsx";
import Gallery from "./gallery/Gallery.tsx";
import Blog from "./blog/Blog.tsx";
import { News_Blog } from "../utils/consents.ts";
import Banner from "./banner/Banner.tsx";

const Home = () => {
  return (
    <>
    <div>
<div className=" space-y-12 md:space-y-24 lg:space-y-10 xl:space-y-16">
        <Banner />
        <JourneySection />

</div>
      <div className="space-y-12 md:space-y-24 lg:space-y-12">
        <ExpertiseSection />
        <SwiperSidlerImage />
        <Innovations />
        <LocationExplorer />
        <TestimonialSlider />
        <Gallery />
        <Partner />
        <Blog news={News_Blog} />
      </div>
      </div>
    </>
  );
};

export default Home;
