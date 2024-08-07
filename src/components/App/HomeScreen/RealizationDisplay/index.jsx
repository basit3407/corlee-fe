import ImageContainer5 from "../ImageContainer5";
import ImageContainer from "../ImageContainer";
import ImageContainer2 from "../ImageContainer2";
import ImageContainer1 from "../ImageContainer1";
import ImageContainer4 from "../ImageContainer4";
import "./style.css";
import messages from "./messages.json";

function RealizationDisplay() {
  return (
    <div className="realization-container-home">
      <p className="majestic-heading-home">{messages["realizations"]}</p>
      <div className="realization-container1-home">
        <div className="image-container-with-text1-home">
          <img
            src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_2307_617c48.webp"
            className="hero-image-container1-home"
          />
          <ImageContainer5 />
        </div>
        <div className="nested-content-container-home">
          <img
            src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_2310_cc486c.webp"
            className="image-container-fullscreen-home"
          />
          <ImageContainer />
        </div>
        <div className="realization-container-home">
          <img
            src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_2313_9e3b38.webp"
            className="profile-image-container1-home"
          />
          <ImageContainer2 />
        </div>
        <div className="image-container-with-text-home">
          <img
            src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_2316_b5b829.webp"
            className="hero-image-container-home"
          />
          <ImageContainer1 />
        </div>
        <div className="vertical-image-container-home">
          <img
            src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_2319_e848c6.webp"
            className="profile-image-container-home"
          />
          <ImageContainer4 />
        </div>
      </div>
    </div>
  );
}

export default RealizationDisplay;
