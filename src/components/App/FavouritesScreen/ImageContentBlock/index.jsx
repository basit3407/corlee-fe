import "./style.css";
import messages from "./messages.json";

function ImageContentBlock() {
  return (
    <div className="vertical-centered-column">
      <img src="/assets/img_1091_3953_5e8b19.jpeg" className="image-container" />
      <p className="art-noova-title">{messages["12s396_2"]}</p>
      <p className="woven-to-plain-style">{messages["woven_gt_plain_2"]}</p>
    </div>
  );
}

export default ImageContentBlock;
