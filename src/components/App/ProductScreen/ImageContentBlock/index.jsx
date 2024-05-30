import "./style.css";
import messages from "./messages.json";

function ImageContentBlock() {
  return (
    <div className="vertical-centered-flex-container">
      <img src="/assets/img_1091_3759_1a26e0.jpeg" className="image-container-with-text" />
      <p className="art-noova-title1">{messages["12s396_2"]}</p>
      <p className="woven-to-plain-style">{messages["woven_gt_plain_2"]}</p>
    </div>
  );
}

export default ImageContentBlock;
