import "./style.css";

function NestedContentBlock() {
  return (
    <div className="parent-container-flex-row">
      <div className="vertical-spacing-container">
        <div className="vertical-divider" />
      </div>
      <div className="image-container-nested">
        <img
          src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4868_7848fb.svg"
          alt=""
          className="boxy-image"
        />
        <div className="vertical-spacer">
          <img
            src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_4879_5237e0.svg"
            alt=""
            className="image-wrapper"
          />
        </div>
      </div>
    </div>
  );
}

export default NestedContentBlock;
