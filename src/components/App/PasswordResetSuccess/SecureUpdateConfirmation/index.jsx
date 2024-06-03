import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function SecureUpdateConfirmation() {
  return (
    <div className="success-message-container">
      <div className="secure-box">
        <SvgIcon1 className="svg-container" />
      </div>
      <p className="success-message-style">{messages["success"]}</p>
      <p className="password-update-message">{messages["password_updated__secure_you_now_login_again"]}</p>
    </div>
  );
}

export default SecureUpdateConfirmation;
