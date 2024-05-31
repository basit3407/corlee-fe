import ColorfulGalleryView from "../ColorfulGalleryView";
import ButtonOptionsWidget from "../ButtonOptionsWidget";
import "./style.css";

function ColorfulDisplayWidget({ imageOptionsList }) {
  return (
    <div className="filter-panel">
      <ColorfulGalleryView imageOptionsList={imageOptionsList} />
      <ButtonOptionsWidget />
    </div>
  );
}

export default ColorfulDisplayWidget;
