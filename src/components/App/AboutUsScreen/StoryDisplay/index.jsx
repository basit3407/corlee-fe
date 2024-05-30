import "./style.css";
import messages from "./messages.json";

function StoryDisplay() {
  return (
    <div className="story-box">
      <p className="golden-heading">{messages["how_started"]}</p>
      <p className="hero-title">{messages["story__commitment_excellence"]}</p>
    </div>
  );
}

export default StoryDisplay;
