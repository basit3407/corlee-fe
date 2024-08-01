import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function DisplayContent() {
  return (
    <div className="card-container-with-text-and-images">
      <div className="info-card">
        <p className="unique-header-text-style">{messages["1a7708_2"]}</p>
        <div className="card-with-code-snippet">
          <SvgIcon1 className="svg-container5" />
        </div>
      </div>
      <div className="product-gallery-row">
        <img
          src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_3833_ab3970.svg"
          alt=""
          className="text-block-container"
        />
        <img
          src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_3843_2056dc.svg"
          alt=""
          className="image-container-with-margin"
        />
      </div>
    </div>
  );
}

export default DisplayContent;
