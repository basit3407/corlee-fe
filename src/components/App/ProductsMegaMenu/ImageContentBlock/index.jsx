import "./style.css";
import messages from "./messages.json";

function ImageContentBlock() {
  return (
    <div className="odor-blocker-container">
      <img src="/assets/img_1091_3577_60c023.jpeg" className="image-with-text-overlay" />
      <p className="anti-odor-heading">{messages["antiodor__antibacterial"]}</p>
    </div>
  );
}

export default ImageContentBlock;
