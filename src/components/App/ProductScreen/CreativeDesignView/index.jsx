import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function CreativeDesignView() {
  return (
    <div className="card-container-with-text-and-images1">
      <div className="info-card">
        <p className="unique-header-text-style">{messages["1a7708_3"]}</p>
        <div className="card-with-code-snippet">
          <SvgIcon1 className="svg-container2" />
        </div>
      </div>
      <div className="flex-container-with-images">
        <img
          src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_3859_bdc852.svg"
          alt=""
          className="text-block-container"
        />
        <img
          src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_3864_282360.svg"
          alt=""
          className="image-container-with-margin"
        />
      </div>
    </div>
  );
}

export default CreativeDesignView;
