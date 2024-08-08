import "./style.css";
import messages from "./messages.json";

function ImageContentBlock() {
  return (
    <div className="odor-blocker-container">
      <img
        src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_3577_60c023.webp"
        className="image-with-text-overlay"
      />
      <p className="anti-odor-heading">{messages["antiodor__antibacterial"]}</p>
    </div>
  );
}

export default ImageContentBlock;
