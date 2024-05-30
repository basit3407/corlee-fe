import AddressInputWidget from "../AddressInputWidget";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function CompanyInfoSection() {
  return (
    <div className="company-details-container4">
      <p className="company-details-title">{messages["company_details"]}</p>
      <div className="company-details-container2">
        <p className="company-title-text-style">{messages["company_name"]}</p>
        <div className="company-logo-container">
          <SvgIcon1 className="svg-container" />
        </div>
      </div>
      <AddressInputWidget />
      <div className="company-details-container3">
        <div className="flexbox-item">
          {/* Input Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <input placeholder="Phone" type="text" className="input-field-with-border input-style-f62::placeholder" />
        </div>
        <div className="flex-grow-shrink-basis-margin-left">
          {/* Input Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <input placeholder="Mobile phone" type="text" className="input-field-with-border input-style-f62::placeholder" />
        </div>
      </div>
      {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <button className="primary-button-style">{messages["create_account"]}</button>
    </div>
  );
}

export default CompanyInfoSection;
