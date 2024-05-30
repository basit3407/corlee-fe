import "./style.css";
import messages from "./messages.json";

function ImageContentBlock2() {
  return (
    <div className="vertical-centered-column">
      <img src="/assets/img_1091_3948_6667a3.jpeg" className="image-container" />
      <p className="art-noova-title">{messages["12s396"]}</p>
      <p className="woven-to-plain-style">{messages["woven_gt_plain"]}</p>
    </div>
  );
}

export default ImageContentBlock2;
