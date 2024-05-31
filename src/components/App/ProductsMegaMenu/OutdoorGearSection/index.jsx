import OutdoorGearDisplay from "../OutdoorGearDisplay";
import "./style.css";
import messages from "./messages.json";

function OutdoorGearSection() {
  return (
    <div className="feature-list-container1">
      <OutdoorGearDisplay />
      <div className="feature-list-container">
        <div className="flex-column-container">
          <img src="/assets/img_1091_3577_60c023.jpeg" className="image-with-text-cover" />
          <p className="feature-description-text-style">{messages["antiabrasion"]}</p>
        </div>
        <div className="vertical-flex-container">
          <img src="/assets/img_1091_3577_60c023.jpeg" className="image-with-text-cover" />
          <p className="feature-description-text-style">{messages["comfort"]}</p>
        </div>
      </div>
    </div>
  );
}

export default OutdoorGearSection;
