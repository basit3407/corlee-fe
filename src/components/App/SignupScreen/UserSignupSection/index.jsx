import StylishLayout from "../StylishLayout";
import UserRegistrationLayout from "../UserRegistrationLayout";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function UserSignupSection() {
  return (
    <div className="vertical-form-container">
      {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <button className="button-with-icon-and-text">
        <SvgIcon1 className="svg-container" />
        {messages["sign_up_google"]}
      </button>
      <StylishLayout />
      <UserRegistrationLayout />
      <div className="account-actions-container">
        <p className="login-prompt-text-style">{messages["already_account"]}</p>
        <p className="login-link-text-style">{messages["login"]}</p>
      </div>
    </div>
  );
}

export default UserSignupSection;
