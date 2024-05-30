import TrendyDisplay from "../TrendyDisplay";
import "./style.css";

function StylishDisplay() {
  return (
    <div className="product-card-container3">
      <TrendyDisplay />
      <div className="product-gallery-row">
        <img
          src="/assets/img_1091_3795_fdcc76.svg"
          alt=""
          className="text-block-container"
        />
        <img
          src="/assets/img_1091_3805_219fe9.svg"
          alt=""
          className="image-container-with-margin"
        />
      </div>
    </div>
  );
}

export default StylishDisplay;
