import ImageTextBlock2 from "../ImageTextBlock2";
import ImageContentBlock from "../ImageContentBlock";
import ImageTextBlock from "../ImageTextBlock";
import ImageTextBlock1 from "../ImageTextBlock1";
import "./style.css";
import messages from "./messages.json";

function StylishProductDisplay() {
  return (
    <div className="product-related-container">
      <div className="product-info-container">
        <div className="product-card-divider" />
        <p className="related-products-heading">{messages["related_products"]}</p>
        <div className="product-card-divider" />
      </div>
      <div className="product-grid-container">
        <div className="vertical-text-container">
          <ImageTextBlock2 />
          <img src="/assets/img_1091_3774_cfe03e.jpeg" className="image-container-with-text" />
          <p className="art-noova-title">{messages["12s396_1"]}</p>
          <p className="text-description-style">{messages["woven_gt_plain_1"]}</p>
        </div>
        <div className="vertical-text-container">
          <ImageContentBlock />
          <img src="/assets/img_1091_3779_520aa0.jpeg" className="image-container-with-text" />
          <p className="art-noova-title">{messages["12s396_3"]}</p>
          <p className="text-description-style">{messages["woven_gt_plain_3"]}</p>
        </div>
        <div className="vertical-text-container">
          <ImageTextBlock />
          <img src="/assets/img_1091_3784_b35c95.jpeg" className="image-container-with-text" />
          <p className="art-noova-title">{messages["12s396_5"]}</p>
          <p className="text-description-style">{messages["woven_gt_plain_5"]}</p>
        </div>
        <div className="vertical-text-container">
          <ImageTextBlock1 />
          <img src="/assets/img_1091_3789_a9e7a7.jpeg" className="image-container-with-text" />
          <p className="art-noova-title">{messages["12s396_7"]}</p>
          <p className="text-description-style">{messages["woven_gt_plain_7"]}</p>
        </div>
      </div>
    </div>
  );
}

export default StylishProductDisplay;
