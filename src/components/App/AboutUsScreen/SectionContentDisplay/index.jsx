import Container from "../../../UI/Container";
import ContentDisplayWidget from "../ContentDisplayWidget";
import EnhancedContentSection from "../EnhancedContentSection";
import "./style.css";

function SectionContentDisplay({ possibleSectionTitles }) {
  return (
    <Container>
      <div className="main-content-container">
        <ContentDisplayWidget possibleSectionTitles={possibleSectionTitles} />
        <EnhancedContentSection />
      </div>
    </Container>
  );
}

export default SectionContentDisplay;
