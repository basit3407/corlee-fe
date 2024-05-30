import IdentityCardView from "../IdentityCardView";
import StylishContentBlock from "../StylishContentBlock";
import EmailDisplayWidget from "../EmailDisplayWidget";
import SecureLoginWidget from "../SecureLoginWidget";
import AddressInputWidget from "../AddressInputWidget";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function UserRegistrationLayout() {
  return (
    <div className="vertical-form-container1">
      <div className="hierarchical-flex-container">
        <IdentityCardView />
        <StylishContentBlock />
      </div>
      <div className="hierarchical-flex-container">
        <EmailDisplayWidget />
        <SecureLoginWidget />
      </div>
      <div className="account-creation-form-input-group">
        <p className="id-label-text-style">{messages["company_name"]}</p>
        <div className="id-container">
          <SvgIcon1 className="svg-container1" />
        </div>
      </div>
      <AddressInputWidget />
      <div className="hierarchical-flex-container">
        <div className="flexbox-item">
          {/* Input Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <input placeholder="Phone" type="text" className="input-field-with-border input-style-f62::placeholder" />
        </div>
        <div className="flex-grow-shrink-basis">
          {/* Input Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <input placeholder="Mobile phone" type="text" className="input-field-with-border input-style-f62::placeholder" />
        </div>
      </div>
      {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <button className="account-creation-button-style">{messages["create_account"]}</button>
    </div>
  );
}

export default UserRegistrationLayout;
