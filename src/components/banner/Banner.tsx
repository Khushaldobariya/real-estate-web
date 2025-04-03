import React from "react";
import Navbar from "../Navbar.tsx";

import MobileBanner from "./MobileBanner.tsx";
import DesktopBanner from "./DesktopBanner.tsx";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import useMediaQuery from "../../hooks/useMediaQuery.ts";
// import "swiper/css/pagination";

const Banner = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  console.log('isDesktop', isDesktop)

  return (
    <section className="relative w-full h-screen ">
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar isHome={true} />
      </div>

      {isDesktop ? <DesktopBanner /> : <MobileBanner />}
    </section>
  );
};

export default Banner;