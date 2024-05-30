import "./style.css";
import messages from "./messages.json";

function ImageContentBlock1() {
  return (
    <div className="vertical-centered-column">
      <img src="/assets/img_1091_3958_3d7261.jpeg" className="image-container" />
      <p className="art-noova-title">{messages["12s396_4"]}</p>
      <p className="woven-to-plain-style">{messages["woven_gt_plain_4"]}</p>
    </div>
  );
}

export default ImageContentBlock1;
