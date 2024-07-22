import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function SecureLoginWidget(props) {
  return (
    <div className="flex-container-with-icon1">
      <input
        type="text"
        className="id-label-text-style"
        placeholder="Password"
        name="password"
        onChange={props.onChange}
        value={props.value}
      />
      <div className="id-container">
        <SvgIcon1 className="svg-container1" />
      </div>
    </div>
  );
}

export default SecureLoginWidget;
