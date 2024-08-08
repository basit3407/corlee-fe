import ImageContentBlock2 from "../ImageContentBlock2";
import ImageContentBlock from "../ImageContentBlock";
import ImageContentBlock1 from "../ImageContentBlock1";
import ImageContentBlock3 from "../ImageContentBlock3";
import "./style.css";
import messages from "./messages.json";

function ProductDisplayBlock() {
  return (
    <div className="product-related-container-fav">
      <div className="product-info-container-fav">
        <div className="product-card-divider-fav" />
        <p className="product-title-text-style-fav">
          {messages["related_products"]}
        </p>
        <div className="product-card-divider-fav" />
      </div>
      <div className="product-grid-container-fav">
        <div className="vertical-text-container-fav">
          <ImageContentBlock2 />
          <img
            src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_3968_ef4585.webp"
            className="image-container-fav"
          />
          <p className="art-noova-text-fav">{messages["12s396_1"]}</p>
          <p className="text-description-style-fav">
            {messages["woven_gt_plain_1"]}
          </p>
        </div>
        <div className="vertical-text-container-fav">
          <ImageContentBlock />
          <img
            src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_3973_5fd7b9.webp"
            className="image-container-fav"
          />
          <p className="art-noova-text-fav">{messages["12s396_3"]}</p>
          <p className="text-description-style-fav">
            {messages["woven_gt_plain_3"]}
          </p>
        </div>
        <div className="vertical-text-container-fav">
          <ImageContentBlock1 />
          <img
            src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_3978_f3ce90.webp"
            className="image-container-fav"
          />
          <p className="art-noova-text-fav">{messages["12s396_5"]}</p>
          <p className="text-description-style-fav">
            {messages["woven_gt_plain_5"]}
          </p>
        </div>
        <div className="vertical-text-container-fav">
          <ImageContentBlock3 />
          <img
            src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_3983_bb41cf.webp"
            className="image-container-fav"
          />
          <p className="art-noova-text-fav">{messages["12s396_7"]}</p>
          <p className="text-description-style-fav">
            {messages["woven_gt_plain_7"]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplayBlock;
