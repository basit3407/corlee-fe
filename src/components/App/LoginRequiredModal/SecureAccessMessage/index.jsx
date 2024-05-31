import UserAuthenticationMessage from "../UserAuthenticationMessage";
import "./style.css";
import messages from "./messages.json";

function SecureAccessMessage() {
  return (
    <div className="login-prompt-container">
      <img
        src="/assets/img_1135_5784_3d0517.svg"
        alt=""
        className="login-required-container"
      />
      <UserAuthenticationMessage />
      <p className="login-prompt-text-style">{messages["please_login_continue"]}</p>
    </div>
  );
}

export default SecureAccessMessage;
