import SecurityCheckWidget from "./SecurityCheckWidget";
import "./style.css";
import messages from "./messages.json";

function FPReset() {
  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      className="resetpage"
    >
      <div className="password-reset-form-container1">
        <div className="password-reset-form">
          <img
            src="/assets/img_1091_3135_bcced9.png"
            className="profile-image-placeholder"
          />
          <SecurityCheckWidget />
          <p className="login-link-text-style">{messages["lt_login"]}</p>
        </div>
      </div>
    </div>
  );
}

export default FPReset;
