import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function SecureUpdateConfirmation(props) {
  return (
    <div className="success-message-container">
      <div className="secure-box">
        <SvgIcon1 className="svg-container" />
      </div>

      <p className="success-message-style">
        {props.email ? "Verify your email" : messages["success"]}
      </p>
      {props.email ? (
        <p className="password-update-message">
          Please verify your email address to fully activate your <br /> Corlee
          account and gain unrestricted access to all our services and features.
        </p>
      ) : (
        <p className="password-update-message">
          {messages["password_updated__secure_you_now_login_again"]}
        </p>
      )}
    </div>
  );
}

export default SecureUpdateConfirmation;
