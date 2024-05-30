import PasswordRecoveryMessage from "./PasswordRecoveryMessage";
import EmailSenderWidget from "./EmailSenderWidget";
import "./style.css";
import messages from "./messages.json";

function FPEnterEmail() {
  return (
    <div className="password-reset-form-container1">
      <div className="password-reset-section">
        <div className="password-reset-container">
          <div className="password-reset-form-container">
            <PasswordRecoveryMessage />
            <EmailSenderWidget />
            <p className="forgot-password-link">{messages["lt_login"]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FPEnterEmail;
