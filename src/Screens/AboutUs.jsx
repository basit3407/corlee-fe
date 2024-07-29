import { useEffect } from "react";
import SectionContentDisplay from "../components/App/AboutUsScreen/SectionContentDisplay";
import BottomBar from "../components/App/BottomBar";
import Navbar from "../components/App/Navbar";
import { mockData } from "../util";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar />
      <SectionContentDisplay
        possibleSectionTitles={mockData.possibleSectionTitles}
      />
      <BottomBar />
    </>
  );
}

export default AboutUs;
