import ImageContentGallery from "../ImageContentGallery";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function ColorfulImageGallery({ imageOptionsList }) {
  return (
    <div className="color-palette-container">
      <div className="sort-container-with-icon">
        <p className="sort-title-text-style">{messages["colors"]}</p>
        <div className="sort-container">
          <span className="rounded-black-badge">2</span>
          <SvgIcon1 className="svg-container" />
        </div>
      </div>
      <ImageContentGallery imageOptionsList={imageOptionsList} />
    </div>
  );
}

export default ColorfulImageGallery;
