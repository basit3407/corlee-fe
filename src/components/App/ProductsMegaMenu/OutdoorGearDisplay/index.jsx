import ImageContentBlock from "../ImageContentBlock";
import "./style.css";
import messages from "./messages.json";

function OutdoorGearDisplay() {
  return (
    <div className="feature-list-container1">
      <div className="flex-column-container">
        <ImageContentBlock />
        <div className="thermal-uv-cut-container">
          <img src="/assets/img_1091_3577_60c023.jpeg" className="image-with-text-overlay" />
          <p className="anti-odor-heading">{messages["thermal__uv_cut"]}</p>
        </div>
      </div>
      <div className="feature-box">
        <div className="flex-column-container">
          <img src="/assets/img_1091_3577_60c023.jpeg" className="waterproof-image-container" />
          <p className="feature-description-text-style">{messages["wicking__water_proof"]}</p>
        </div>
        <div className="center-column-stretch">
          <img src="/assets/img_1091_3577_60c023.jpeg" className="image-with-text-cover" />
          <p className="feature-description-text-style">{messages["stretch"]}</p>
        </div>
      </div>
    </div>
  );
}

export default OutdoorGearDisplay;