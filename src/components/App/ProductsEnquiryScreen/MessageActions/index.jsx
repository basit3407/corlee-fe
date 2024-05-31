import "./style.css";
import messages from "./messages.json";

function MessageActions() {
  return (
    <div className="contact-info-container">
      <div className="contact-info-container1">
        <p className="contact-info-text-style">{messages["2245991788"]}</p>
        <p className="highlighted-text">{messages["copy_1"]}</p>
      </div>
      <div className="contact-actions-container">
        {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
        <button className="email-button-style">{messages["send_email"]}</button>
        {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
        <button className="call-button-style">{messages["make_call"]}</button>
      </div>
    </div>
  );
}

export default MessageActions;
