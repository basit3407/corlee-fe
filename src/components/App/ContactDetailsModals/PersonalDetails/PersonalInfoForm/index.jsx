import "./style.css";
import messages from "./messages.json";

function PersonalInfoForm() {
  return (
    <div className="vertical-centered-form">
      <div className="flex-row-container">
        <div className="label-wrapper">
          {/* Input with Label Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <div className="flex-row-container1">
            <label htmlFor="name" className="label-block">
              {messages["name"]}
            </label>
            <input id="name" placeholder="Ms. Drew Homenick" type="text" className="input-with-label-style input-style-f62::placeholder" />
          </div>
        </div>
        <div className="company-info-container">
          {/* Input with Label Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <div className="flex-row-container1">
            <label htmlFor="company name" className="label-block">
              {messages["company_name"]}
            </label>
            <input id="company name" placeholder="Corwin LLC" type="text" className="input-with-label-style input-style-f62::placeholder" />
          </div>
        </div>
      </div>
      {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <button className="action-button">{messages["updates"]}</button>
    </div>
  );
}

export default PersonalInfoForm;
