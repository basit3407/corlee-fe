import OutdoorGearDisplay from "../OutdoorGearDisplay";
import "./style.css";
import messages from "./messages.json";

function OutdoorGearSection() {
  return (
    <div className="feature-list-container1">
      <OutdoorGearDisplay />
      <div className="feature-list-container">
        <div className="flex-column-container">
          <img
            src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_3577_60c023.webp"
            className="image-with-text-cover"
          />
          <p className="feature-description-text-style">
            {messages["antiabrasion"]}
          </p>
        </div>
        <div className="vertical-flex-container">
          <img
            src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_3577_60c023.webp"
            className="image-with-text-cover"
          />
          <p className="feature-description-text-style">
            {messages["comfort"]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OutdoorGearSection;
