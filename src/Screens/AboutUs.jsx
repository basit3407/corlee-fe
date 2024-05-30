import SectionContentDisplay from "../components/App/AboutUsScreen/SectionContentDisplay";
import { mockData } from "../util";

function AboutUs() {
  return (
    <>
      <SectionContentDisplay
        possibleSectionTitles={mockData.possibleSectionTitles}
      />
    </>
  );
}

export default AboutUs;
