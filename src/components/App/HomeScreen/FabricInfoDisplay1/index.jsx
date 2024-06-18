import FabricDescriptionSection from "../FabricDescriptionSection";
import ImageContainer3 from "../ImageContainer3";
import FabricExplorer from "../FabricExplorer";
import FabricDisplayRenderer from "../FabricDisplayRenderer";
import RealizationDisplay from "../RealizationDisplay";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import "./style.css";
import messages from "./messages.json";

function FabricInfoDisplay1({ fabricInfoOptions }) {
  return (
    <div className="global-fashion-fabric-styles">
      <FabricDescriptionSection />
      <div className="fabric-gallery-container">
        <img
          src="/assets/img_1091_2366_1d1ae1.jpeg"
          className="image-container-with-clipping-path"
        />
        <div className="fashion-text-container2">
          {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <button className="button-with-icon2">
            {messages["discover_more"]}
            <SvgIcon1 className="svg-container3" />
          </button>
          <ImageContainer3 />
        </div>
        <img
          src="/assets/img_1091_2366_1d1ae1.jpeg"
          className="image-container-with-clipping-path"
        />
      </div>
      <div className="fabric-range-section">
        <div className="fabric-types-section">
          <p className="fabric-type-heading">
            {messages["range_fabric_types_we_offer"]}
          </p>
          <p className="fabric-type-description">
            {messages["lrem_ipsum_suledes_plankning_till_heterossade_tosn"]}
          </p>
        </div>
        <div className="fabric-type-range-container">
          <div className="center-box-with-svg">
            <SvgIcon2 className="svg-container4" />
          </div>
          <div className="black-rounded-box-with-text">
            <SvgIcon3 className="svg-container4" />
          </div>
        </div>
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
          <p className="hero-text-underline">{messages["about_us_gt"]}</p>
        </div>
        <FabricDisplayRenderer fabricInfoOptions={fabricInfoOptions} />
      </div>
      <RealizationDisplay />
    </div>
  );
}

export default FabricInfoDisplay1;
