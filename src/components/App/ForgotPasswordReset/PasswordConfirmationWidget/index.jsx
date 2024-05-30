import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function PasswordConfirmationWidget() {
  return (
    <div className="nested-svg-container">
      {/* Input Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <div className="flex-row-container">
        <input placeholder="Confirm new password" type="text" className="input-with-icon input-style-f62::placeholder" />
        <SvgIcon1 className="svg-container" />
      </div>
    </div>
  );
}

export default PasswordConfirmationWidget;
