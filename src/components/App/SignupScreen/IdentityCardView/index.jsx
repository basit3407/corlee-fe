import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function IdentityCardView(props) {
  return (
    <div className="flex-container-with-icon">
      <input
        type="text"
        className="id-label-text-style"
        placeholder="ID"
        name="username"
        onChange={props.onChange}
        value={props.value}
      />
      <div className="id-container">
        <SvgIcon1 className="svg-container1" />
      </div>
    </div>
  );
}

export default IdentityCardView;
