import "./style.css";
import messages from "./messages.json";

function ButtonOptionsWidget() {
  return (
    <div className="vertical-button-group">
      {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <button className="primary-button-style">{messages["apply"]}</button>
      {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <button className="primary-button">{messages["clear_all"]}</button>
    </div>
  );
}

export default ButtonOptionsWidget;
