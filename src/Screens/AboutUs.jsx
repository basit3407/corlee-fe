import SectionContentDisplay from "../components/App/AboutUsScreen/SectionContentDisplay";
import BottomBar from "../components/App/BottomBar";
import Navbar from "../components/App/Navbar";
import { mockData } from "../components/App/CallUsModal";

function AboutUs() {
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
