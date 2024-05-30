import "./style.css";
import messages from "./messages.json";

function PasswordResetMessage() {
  return (
    <div className="password-reset-message-container">
      <p className="password-reset-heading-style">{messages["reset_password"]}</p>
      <p className="password-reset-message">{messages["almost_doneltbr_gtenter_new_password__you_good_go"]}</p>
    </div>
  );
}

export default PasswordResetMessage;
