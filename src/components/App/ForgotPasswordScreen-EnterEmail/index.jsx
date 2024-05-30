import PasswordRecoveryMessage from "./PasswordRecoveryMessage";
import EmailFormWidget from "./EmailFormWidget";
import "./style.css";
import messages from "./messages.json";

function FPEnterEmail() {
  return (
    <div className="fpc">
      <div className="password-reset-container">
        <div className="password-reset-form-container">
          <PasswordRecoveryMessage />
          <EmailFormWidget />
          <p className="login-link-text-style">{messages["lt_login"]}</p>
        </div>
      </div>
    </div>
  );
}

export default FPEnterEmail;
