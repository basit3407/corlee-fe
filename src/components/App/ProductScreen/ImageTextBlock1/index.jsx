import "./style.css";
import messages from "./messages.json";

function ImageTextBlock1() {
  return (
    <div className="vertical-centered-flex-container">
      <img
        src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_3769_b2381c.webp"
        className="image-container-with-text"
      />
      <p className="art-noova-title1">{messages["12s396_6"]}</p>
      <p className="woven-to-plain-style">{messages["woven_gt_plain_6"]}</p>
    </div>
  );
}

export default ImageTextBlock1;
