import HeroSection from "../components/aboutus/HeroSection";
import OurStory from "../components/aboutus/OurStory";
import PrinciplesSection from "../components/aboutus/PrinciplesSection";
import WhatMakesDifferent from "../components/aboutus/WhatMakesDifferent";
import OurTeam from "../components/aboutus/OurTeam";
import WorkProcess from "../components/home/WorkProcess/WorkProcess";
import Technologies from "../components/aboutus/Technologies";
import CtaSection from "../components/aboutus/CtaSection";

export default function AboutUs() {
  return (
    <>
      <HeroSection />
      <OurStory />
      <PrinciplesSection />
      <WhatMakesDifferent />
      <OurTeam />
      <WorkProcess />
      <Technologies />
      <CtaSection />
    </>
  );
}