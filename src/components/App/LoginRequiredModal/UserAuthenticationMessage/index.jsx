import "./style.css";
import messages from "./messages.json";

function UserAuthenticationMessage() {
  return (
    <div className="login-prompt-container1">
      <p className="auth-title">{messages["login_required"]}</p>
      <p className="login-prompt-style">{messages["login_required_1"]}</p>
    </div>
  );
}

export default UserAuthenticationMessage;
