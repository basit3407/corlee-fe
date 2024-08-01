import NumberedListContainer from "../NumberedListContainer";
import "./style.css";

function ImageListContainer() {
  return (
    <div className="vertical-centered-layout">
      <div className="horizontal-flex-container-with-text-aligned-center">
        <img
          src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1135_8915_714d59.svg"
          alt=""
          className="image-container"
        />
        <img
          src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_3692_458f26.svg"
          alt=""
          className="image-block"
        />
        <img
          src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1135_8920_20e63d.svg"
          alt=""
          className="image-box1"
        />
        <img
          src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_3700_db0891.svg"
          alt=""
          className="image-box"
        />
        <img
          src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_3702_cbd766.svg"
          alt=""
          className="image-block"
        />
      </div>
      <div className="center-aligned-flex-container">
        <NumberedListContainer />
        <div className="vertical-centered-box">
          <p className="hierarchical-text-styler">05</p>
        </div>
      </div>
    </div>
  );
}

export default ImageListContainer;
