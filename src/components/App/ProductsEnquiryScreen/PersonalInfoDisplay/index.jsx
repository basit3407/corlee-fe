import PersonalDetailsSection from "../PersonalDetailsSection";
import ContactInfoDisplay from "../ContactInfoDisplay";
import "./style.css";

function PersonalInfoDisplay() {
  return (
    <div className="personal-details-card">
      <PersonalDetailsSection />
      <ContactInfoDisplay />
    </div>
  );
}

export default PersonalInfoDisplay;
