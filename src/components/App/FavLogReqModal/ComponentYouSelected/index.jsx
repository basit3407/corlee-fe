import SecureAccessMessage from "../SecureAccessMessage";
import "./style.css";
import messages from "./messages.json";

function ComponentYouSelected() {
  return (
    <div className="login-required-popup">
      <div className="login-prompt-container2">
        <SecureAccessMessage />
        <div className="center-button-group">
          {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <button className="login-button-style">{messages["login"]}</button>
          {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <button className="cool-button-style">{messages["no_im_cool"]}</button>
        </div>
      </div>
    </div>
  );
}

export default ComponentYouSelected;
