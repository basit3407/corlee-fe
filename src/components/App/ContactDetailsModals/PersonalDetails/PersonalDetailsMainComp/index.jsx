import PersonalInfoForm from "../PersonalInfoForm";
import "./style.css";
import messages from "./messages.json";

function PersonalDetailsMainComp() {
  return (
    <div className="personal-details-container">
      <div className="personal-details-container1">
        <div className="personal-details-update">
          <p className="personal-details-title">
            {messages["personal_details"]}
          </p>
          <p className="company-details-update-text-style">
            {messages["update_company_details"]}
          </p>
        </div>
      </div>
      <PersonalInfoForm />
    </div>
  );
}

export default PersonalDetailsMainComp;
