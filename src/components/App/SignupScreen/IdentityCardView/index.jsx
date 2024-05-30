import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function IdentityCardView() {
  return (
    <div className="flex-container-with-icon">
      <p className="id-label-text-style">ID</p>
      <div className="id-container">
        <SvgIcon1 className="svg-container1" />
      </div>
    </div>
  );
}

export default IdentityCardView;
