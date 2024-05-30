import ImageContainer5 from "../ImageContainer5";
import ImageContainer from "../ImageContainer";
import ImageContainer2 from "../ImageContainer2";
import ImageContainer1 from "../ImageContainer1";
import ImageContainer4 from "../ImageContainer4";
import "./style.css";
import messages from "./messages.json";

function RealizationDisplay() {
  return (
    <div className="realization-container">
      <p className="majestic-heading">{messages["realizations"]}</p>
      <div className="realization-container1">
        <div className="image-container-with-text1">
          <img src="/assets/img_1091_2307_617c48.jpeg" className="hero-image-container1" />
          <ImageContainer5 />
        </div>
        <div className="nested-content-container">
          <img src="/assets/img_1091_2310_cc486c.jpeg" className="image-container-fullscreen" />
          <ImageContainer />
        </div>
        <div className="realization-container">
          <img src="/assets/img_1091_2313_9e3b38.jpeg" className="profile-image-container1" />
          <ImageContainer2 />
        </div>
        <div className="image-container-with-text">
          <img src="/assets/img_1091_2316_b5b829.jpeg" className="hero-image-container" />
          <ImageContainer1 />
        </div>
        <div className="vertical-image-container">
          <img src="/assets/img_1091_2319_e848c6.jpeg" className="profile-image-container" />
          <ImageContainer4 />
        </div>
      </div>
    </div>
  );
}

export default RealizationDisplay;
