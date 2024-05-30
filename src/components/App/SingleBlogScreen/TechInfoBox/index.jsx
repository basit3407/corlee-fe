import "./style.css";
import messages from "./messages.json";

function TechInfoBox() {
  return (
    <div className="technology-card">
      <div className="technology-card2">
        <p className="tech-title-bold">{messages["technology"]}</p>
        <p className="tech-lauda-bold">{messages["excepturi_quis_laudantium"]}</p>
        <div className="technology-card1">
          <img src="/assets/img_1091_9033_293865.jpeg" className="profile-image-container" />
          <div className="fisher-info-container">
            <p className="ice-fisher-paragraph">{messages["cice_fisher"]}</p>
            <img
              src="/assets/img_1091_9036_2d85b9.svg"
              alt=""
              className="ice-fisher-style"
            />
          </div>
          <p className="event-date-text-style">{messages["sun_nov_05_2023"]}</p>
        </div>
      </div>
    </div>
  );
}

export default TechInfoBox;
