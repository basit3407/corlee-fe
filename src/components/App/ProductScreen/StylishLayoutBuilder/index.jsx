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
      <div className="product-card-container2">
        <StylishDisplay />
        <StylishCardGallery />
        <DisplayContent />
      </div>
      <div className="product-card-container4">
        <CreativeDesignView />
        <StylishContentBlock />
        <DisplayContent1 />
      </div>
    </div>
  );
}

export default StylishLayoutBuilder;
