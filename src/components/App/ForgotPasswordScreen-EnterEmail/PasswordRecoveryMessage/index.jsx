import "./style.css";
import messages from "./messages.json";

function PasswordRecoveryMessage() {
  return (
    <div className="password-reset-info-box-email">
      <p className="password-reset-message-email">
        {messages["forgot_password"]}
      </p>
      <p className="password-reset-message1-email">
        {messages["dont_worry_enter_accounts_email_address__well_send"]}
      </p>
    </div>
  );
}

export default PasswordRecoveryMessage;
