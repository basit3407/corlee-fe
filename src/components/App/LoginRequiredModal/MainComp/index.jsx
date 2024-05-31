import SecureAccessMessage from "../SecureAccessMessage";
import "./style.css";
import messages from "./messages.json";

function LoginReqModalMain() {
  return (
    <div className="login-container">
      <div className="auth-container">
        <SecureAccessMessage />
        <div className="login-container1">
          {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <button className="login-button-style">{messages["login"]}</button>
          {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <button className="button-with-border-radius">
            {messages["create_account"]}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginReqModalMain;
