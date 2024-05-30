import ImageListContainer from "../ImageListContainer";
import "./style.css";
import messages from "./messages.json";

function ProductInfoSection() {
  return (
    <div className="vertical-flow-container">
      <ImageListContainer />
      <div className="process-steps-container">
        <p className="hierarchical-text-block">{messages["inquiryltbr_gtquotation"]}</p>
        <p className="hierarchical-text-block">{messages["place_yourltbr_gtorder"]}</p>
        <p className="hierarchical-text-block">{messages["manufacturingltbr_gtyour_product"]}</p>
        <p className="hierarchical-text-block">{messages["inspection_ltbr_gtpackaging"]}</p>
        <p className="hierarchical-text-block">{messages["delivery_toltbr_gtyour_address"]}</p>
      </div>
    </div>
  );
}

export default ProductInfoSection;
