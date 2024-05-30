import PasswordRecoveryMessage from "./PasswordRecoveryMessage";
import EmailSenderWidget from "./EmailSenderWidget";
import "./style.css";
import messages from "./messages.json";

function FPEnterEmail() {
  return (
    <div className="password-reset-form-container1-email">
      <div className="password-reset-section-email">
        <div className="password-reset-container-email">
          <div className="password-reset-form-container-email">
            <PasswordRecoveryMessage />
            <EmailSenderWidget />
            <p className="forgot-password-link-email">{messages["lt_login"]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FPEnterEmail;
