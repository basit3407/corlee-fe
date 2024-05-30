import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function DisplayContent1() {
  return (
    <div className="card-container">
      <div className="info-card">
        <p className="unique-header-text-style">{messages["1a7708_5"]}</p>
        <div className="card-with-code-snippet">
          <SvgIcon1 className="svg-container2" />
        </div>
      </div>
      <div className="flex-container-with-images">
        <img
          src="/assets/img_1091_3897_48aac4.svg"
          alt=""
          className="text-block-container"
        />
        <img
          src="/assets/img_1091_3902_bf5867.svg"
          alt=""
          className="image-container-with-margin"
        />
      </div>
    </div>
  );
}

export default DisplayContent1;
