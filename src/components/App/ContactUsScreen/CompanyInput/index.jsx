import "./style.css";
import messages from "./messages.json";

function CompanyInput() {
  return (
    <div className="container-with-label">
      {/* Input with Label Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <div className="form-field-container">
        <label htmlFor="company name" className="name-label-style">
          {messages["company_name"]}
        </label>
        <input id="company name" placeholder="i.e ABC Company" type="text" className="input-with-label input-style-f62::placeholder" />
      </div>
    </div>
  );
}

export default CompanyInput;
