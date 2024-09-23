import FabricDescriptionSection from "../FabricDescriptionSection";
import ImageContainer3 from "../ImageContainer3";
import FabricExplorer from "../FabricExplorer";
import FabricDisplayRenderer from "../FabricDisplayRenderer";
import RealizationDisplay from "../RealizationDisplay";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";
import { useNavigate } from "react-router-dom";
import arrow from "../../../../../public/pngegg.png";

function FabricInfoDisplay1({ fabricInfoOptions }) {
  const navigate = useNavigate();
  return (
    <div className="global-fashion-fabric-styles">
      <FabricDescriptionSection />
      <div className="fabric-gallery-container">
        <img
          src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_2366_1d1ae1.webp"
          className="image-container-with-clipping-path"
        />
        <div className="fashion-text-container2">
          {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <button
            className="button-with-icon2"
            onClick={() => {
              navigate("/about");
            }}
          >
            {messages["discover_more"]}
            <SvgIcon1 className="svg-container3" />
          </button>
          <ImageContainer3 />
        </div>
        <img
          src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_2366_1d1ae1.webp"
          className="image-container-with-clipping-path"
        />
      </div>

      <FabricExplorer />
      <div className="custom-fabric-features-section">
        <div className="custom-fabric-description-container">
          <p className="majestic-heading1">
            {messages["we_analyzeltbr_gtwe_refineltbr_gtwe_innovate"]}
          </p>
          <p className="custom-fabric-description-style">
            {messages["we_trusted_partner_offering_crafted_custom_functio"]}
          </p>
          <p
            className="hero-text-underline"
            style={{
              cursor: "pointer",
            }}
            onClick={() => navigate("/about")}
          >
            About us <img className="arrow arrowdiff" src={arrow} alt="arrow" />
          </p>
        </div>
        <FabricDisplayRenderer fabricInfoOptions={fabricInfoOptions} />
      </div>
      <RealizationDisplay />
    </div>
  );
}

export default FabricInfoDisplay1;
