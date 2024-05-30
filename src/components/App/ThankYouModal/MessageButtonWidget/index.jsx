import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function MessageButtonWidget() {
  return (
    <div className="card-with-button">
      <p className="blue-heading-bold">{messages["1295a9u"]}</p>
      {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <button className="button-with-icon">
        <SvgIcon1 className="svg-container" />
        {messages["copy"]}
      </button>
    </div>
  );
}

export default MessageButtonWidget;
