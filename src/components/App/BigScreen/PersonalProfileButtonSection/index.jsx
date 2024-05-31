import PersonalProfileSection from "../PersonalProfileSection";
import "./style.css";
import messages from "./messages.json";

function PersonalProfileButtonSection() {
  return (
    <div className="personal-details-section">
      <PersonalProfileSection />
      {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <button className="submit-button-style">{messages["submit_request"]}</button>
    </div>
  );
}

export default PersonalProfileButtonSection;
