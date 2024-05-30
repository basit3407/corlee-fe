import EmailInputWidget from "../EmailInputWidget";
import "./style.css";
import messages from "./messages.json";

function EmailFormWidget() {
  return (
    <div className="center-aligned-button-container">
      <EmailInputWidget />
      {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <button className="reset-link-button">{messages["send_reset_link"]}</button>
    </div>
  );
}

export default EmailFormWidget;
