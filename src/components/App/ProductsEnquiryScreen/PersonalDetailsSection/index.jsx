import "./style.css";
import messages from "./messages.json";

function PersonalDetailsSection() {
  return (
    <div className="personal-details-container">
      <p className="personal-details-heading1">{messages["personal_details"]}</p>
      <p className="personal-details-heading">{messages["ms_drew_homenick"]}</p>
    </div>
  );
}

export default PersonalDetailsSection;
