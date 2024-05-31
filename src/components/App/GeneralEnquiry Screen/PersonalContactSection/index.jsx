import PersonalDetailsSection from "../PersonalDetailsSection";
import ContactInfoSection from "../ContactInfoSection";
import "./style.css";

function PersonalContactSection() {
  return (
    <div className="personal-details-container">
      <PersonalDetailsSection />
      <ContactInfoSection />
    </div>
  );
}

export default PersonalContactSection;
