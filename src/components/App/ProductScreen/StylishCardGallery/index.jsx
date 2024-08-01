import TrendyCard from "../TrendyCard";
import "./style.css";

function StylishCardGallery() {
  return (
    <div className="product-card-container">
      <TrendyCard />
      <div className="product-gallery-row">
        <img
          src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_3814_2006df.svg"
          alt=""
          className="text-block-container"
        />
        <img
          src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_3819_effba8.svg"
          alt=""
          className="image-container-with-margin"
        />
      </div>
    </div>
  );
}

export default StylishCardGallery;
