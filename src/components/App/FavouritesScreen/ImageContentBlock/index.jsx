import "./style.css";
import messages from "./messages.json";

function ImageContentBlock() {
  return (
    <div className="vertical-centered-column">
      <img
        src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_3953_5e8b19.webp"
        className="image-container"
      />
      <p className="art-noova-title">{messages["12s396_2"]}</p>
      <p className="woven-to-plain-style">{messages["woven_gt_plain_2"]}</p>
    </div>
  );
}

export default ImageContentBlock;
