import "./style.css";
import messages from "./messages.json";

function CompanyInputWidget() {
  return (
    <div className="subject-container">
      {/* Input with Label Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <div className="horizontal-centered-label-container">
        <label htmlFor="company name" className="bold-black-label label5">
          {messages["company_name"]}
        </label>
        <input
          id="company name"
          placeholder="i.e ABC Company"
          type="text"
          className="input-with-label-style input-style-f62::placeholder"
        />
      </div>
    </div>
  );
}

export default CompanyInputWidget;
