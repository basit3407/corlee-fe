import "./style.css";
import messages from "./messages.json";

function ImageTextBlock() {
  return (
    <div className="vertical-centered-flex-container">
      <img src="/assets/img_1091_3764_3278f4.jpeg" className="image-container-with-text" />
      <p className="art-noova-title1">{messages["12s396_4"]}</p>
      <p className="woven-to-plain-style">{messages["woven_gt_plain_4"]}</p>
    </div>
  );
}

export default ImageTextBlock;
