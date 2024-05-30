import "./style.css";
import messages from "./messages.json";

function ImageTextBlock2() {
  return (
    <div className="vertical-centered-flex-container">
      <img src="/assets/img_1091_3754_805bfd.jpeg" className="image-container-with-text" />
      <p className="art-noova-title1">{messages["12s396"]}</p>
      <p className="woven-to-plain-style">{messages["woven_gt_plain"]}</p>
    </div>
  );
}

export default ImageTextBlock2;
