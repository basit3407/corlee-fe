import "./style.css";
import messages from "./messages.json";

function VisionBlock() {
  return (
    <div className="vision-container">
      <img
        src="/assets/img_1091_3661_d27536.svg"
        alt=""
        className="vision-icon"
      />
      <p className="visionary-heading">{messages["vision"]}</p>
    </div>
  );
}

export default VisionBlock;
