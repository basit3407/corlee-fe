import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function SecureLoginWidget() {
  return (
    <div className="flex-container-with-icon1">
      <p className="id-label-text-style">{messages["password"]}</p>
      <div className="id-container">
        <SvgIcon1 className="svg-container1" />
      </div>
    </div>
  );
}

export default SecureLoginWidget;
