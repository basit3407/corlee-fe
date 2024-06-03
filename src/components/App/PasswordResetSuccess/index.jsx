import SecureUpdateConfirmation from "./SecureUpdateConfirmation";
import "./style.css";
import messages from "./messages.json";

function ComponentYouSelected() {
  return (
    <div className="success-container">
      <div className="secure-password-update-notification">
        <div className="password-update-confirmation-container">
          <SecureUpdateConfirmation />
          {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <button className="login-button-style">
            {messages["return_login"]}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ComponentYouSelected;
