import "./style.css";
import messages from "./messages.json";

function VisionBlock() {
  return (
    <div className="vision-container">
      <img
        src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_3661_d27536.svg"
        alt=""
        className="vision-icon"
      />
      <p className="visionary-heading">{messages["vision"]}</p>
    </div>
  );
}

export default VisionBlock;
