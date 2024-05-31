import "./style.css";

function NestedContentBlock() {
  return (
    <div className="parent-container-flex-row">
      <div className="vertical-spacing-container">
        <div className="vertical-divider" />
      </div>
      <div className="image-container-nested">
        <img
          src="/assets/img_1091_4868_7848fb.svg"
          alt=""
          className="boxy-image"
        />
        <div className="vertical-spacer">
          <img
            src="/assets/img_1091_4879_5237e0.svg"
            alt=""
            className="image-wrapper"
          />
        </div>
      </div>
    </div>
  );
}

export default NestedContentBlock;
