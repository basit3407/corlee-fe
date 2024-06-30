import PasswordInputWidget from "../PasswordInputWidget";
import PasswordConfirmationWidget from "../PasswordConfirmationWidget";
import "./style.css";
import messages from "./messages.json";

function SecurePasswordForm() {
  return (
    <div className="password-reset-form-container">
      <PasswordInputWidget />
      <div className="text-content-container container2">
        <div className="text-grouping-container">
          <div className="text-content-container">
            <img
              src="/assets/img_1091_3147_dc1186.svg"
              alt=""
              className="text-image-block"
            />
            <p className="text-styler">{messages["lowercase_characters"]}</p>
          </div>
          <div className="text-block-container">
            <img
              src="/assets/img_1091_3150_903815.svg"
              alt=""
              className="text-image-block"
            />
            <p className="text-styler">{messages["numbers"]}</p>
          </div>
        </div>
        <div className="vertical-text-block">
          <div className="text-content-container">
            <img
              src="/assets/img_1091_3154_932af4.svg"
              alt=""
              className="text-image-block"
            />
            <p className="text-styler">{messages["uppercase_characters"]}</p>
          </div>
          <div className="text-block-container">
            <img
              src="/assets/img_1091_3157_9e00ec.svg"
              alt=""
              className="text-image-block"
            />
            <p className="text-styler">{messages["8_characters_minimum"]}</p>
          </div>
        </div>
      </div>
      <PasswordConfirmationWidget />
      {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <button className="password-reset-button">
        {messages["reset_password"]}
      </button>
    </div>
  );
}

export default SecurePasswordForm;
