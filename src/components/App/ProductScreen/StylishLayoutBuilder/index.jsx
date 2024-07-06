import StylishDisplay from "../StylishDisplay";
import StylishCardGallery from "../StylishCardGallery";
import DisplayContent from "../DisplayContent";
import CreativeDesignView from "../CreativeDesignView";
import StylishContentBlock from "../StylishContentBlock";
import DisplayContent1 from "../DisplayContent1";
import "./style.css";

function StylishLayoutBuilder() {
  return (
    <div className="vertical-centered-flex-container">
      <StylishDisplay />
      <StylishDisplay />
      <StylishDisplay />
      <StylishDisplay />
      <StylishDisplay />
      <StylishDisplay />
    </div>
  );
}

export default StylishLayoutBuilder;
