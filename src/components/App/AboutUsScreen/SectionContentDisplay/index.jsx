import ContentDisplayWidget from "../ContentDisplayWidget";
import EnhancedContentSection from "../EnhancedContentSection";
import "./style.css";

function SectionContentDisplay({ possibleSectionTitles }) {
  return (
    <div
      style={{
        display: "inline-block",
        width: "100%",
        background: "whitesmoke",
      }}
      data-ignore="used only for top most containter width"
    >
      <div className="main-content-container">
        <ContentDisplayWidget possibleSectionTitles={possibleSectionTitles} />
        <EnhancedContentSection />
      </div>
    </div>
  );
}

export default SectionContentDisplay;
