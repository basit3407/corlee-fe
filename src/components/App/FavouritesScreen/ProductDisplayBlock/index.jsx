import ImageContentBlock2 from "../ImageContentBlock2";
import ImageContentBlock from "../ImageContentBlock";
import ImageContentBlock1 from "../ImageContentBlock1";
import ImageContentBlock3 from "../ImageContentBlock3";
import "./style.css";
import messages from "./messages.json";

function ProductDisplayBlock() {
  return (
    <div className="product-related-container">
      <div className="product-info-container">
        <div className="product-card-divider" />
        <p className="product-title-text-style">{messages["related_products"]}</p>
        <div className="product-card-divider" />
      </div>
      <div className="product-grid-container">
        <div className="vertical-text-container">
          <ImageContentBlock2 />
          <img src="/assets/img_1091_3968_ef4585.jpeg" className="image-container" />
          <p className="art-noova-text">{messages["12s396_1"]}</p>
          <p className="text-description-style">{messages["woven_gt_plain_1"]}</p>
        </div>
        <div className="vertical-text-container">
          <ImageContentBlock />
          <img src="/assets/img_1091_3973_5fd7b9.jpeg" className="image-container" />
          <p className="art-noova-text">{messages["12s396_3"]}</p>
          <p className="text-description-style">{messages["woven_gt_plain_3"]}</p>
        </div>
        <div className="vertical-text-container">
          <ImageContentBlock1 />
          <img src="/assets/img_1091_3978_f3ce90.jpeg" className="image-container" />
          <p className="art-noova-text">{messages["12s396_5"]}</p>
          <p className="text-description-style">{messages["woven_gt_plain_5"]}</p>
        </div>
        <div className="vertical-text-container">
          <ImageContentBlock3 />
          <img src="/assets/img_1091_3983_bb41cf.jpeg" className="image-container" />
          <p className="art-noova-text">{messages["12s396_7"]}</p>
          <p className="text-description-style">{messages["woven_gt_plain_7"]}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplayBlock;