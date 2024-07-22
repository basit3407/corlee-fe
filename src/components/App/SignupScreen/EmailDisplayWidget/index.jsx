import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function EmailDisplayWidget(props) {
  return (
    <div className="flex-container-with-icon">
      <input
        type="text"
        className="id-label-text-style"
        placeholder="Email"
        name="email"
        onChange={props.onChange}
        value={props.value}
      />
      <div className="id-container">
        <SvgIcon1 className="svg-container1" />
      </div>
    </div>
  );
}

export default EmailDisplayWidget;
