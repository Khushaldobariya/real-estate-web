import React from "react";
import Navbar from "../Navbar.tsx";
import SectionTitle from "../SectionTitle.tsx";
import InnovationCard from "./InnovationCard.tsx";
import { InnovationsData, SocialMediaData } from "../../utils/consents.ts";
import GrowthPartnerCard from "./GrowthPartnerCard.tsx";
import SocialMediaCard from "./SocialMediaCard.tsx";
import Emicalculator from "./Emicalculator.tsx";

const Innovations = () => {
  return (
    <div>
      <Navbar isHome={false} />
      <div className="px-5  mx-auto space-y-24 lg:container  mt-36">
        <SectionTitle
          title="Our "
          title1="Innovations"
          align="center"
          subtitle="we believe that true innovation stems from empathizing with the challenges our customers face and creating solutions that directly address their needs."
          breadcrumb={["home", "Innovations"]}
        />
        <div className="border-t border-white/40 px-6">
          <div>
            {InnovationsData.map((innovation, index) => (
              <InnovationCard key={index} index={index} {...innovation} />
            ))}
          </div>
        </div>
          <div>
            <Emicalculator />
          </div>

          <GrowthPartnerCard
            title="Growth Partner"
            subtitle="3rd Innovation"
            description="Rashmi Group introduces Mumbai’s first Growth-Partner. This Floor-to-Floor Revolutionary Retail Property Investment Plan gets you Monthly Income with 51:50 Profit Sharing."
            highlights={[
              "51% ROI",
              "Hassle-Free Exit",
              "Monthly Income Assured",
            ]}
            videoSrc="/path-to-thumbnail.jpg"
          />
          <div className="text-center py-10">
            <h2 className="text-2xl font-medium">Get Social</h2>
            <p className="text-gray-600">
              Join us on Instagram, Facebook & Youtube
            </p>
            <div className="flex flex-wrap  justify-center gap-16 mt-6">
              {SocialMediaData.map((item, index) => (
                <SocialMediaCard key={index} {...item} />
              ))}
            </div>
          </div>
      </div>
    </div>
  );
};

export default Innovations;
