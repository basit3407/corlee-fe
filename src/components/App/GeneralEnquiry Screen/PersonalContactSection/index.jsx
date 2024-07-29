import PersonalDetailsSection from "../PersonalDetailsSection";
import ContactInfoSection from "../ContactInfoSection";
import "./style.css";

function PersonalContactSection(props) {
  return (
    <div className="personal-details-container">
      <PersonalDetailsSection {...props} />
      <ContactInfoSection {...props} />
    </div>
  );
}

export default PersonalContactSection;
