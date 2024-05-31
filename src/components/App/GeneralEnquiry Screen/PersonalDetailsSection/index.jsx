import "./style.css";
import messages from "./messages.json";

function PersonalDetailsSection() {
  return (
    <div className="personal-details-container1">
      <p className="personal-details-title1">{messages["personal_details"]}</p>
      <p className="personal-details-title">{messages["ms_drew_homenick"]}</p>
    </div>
  );
}

export default PersonalDetailsSection;
