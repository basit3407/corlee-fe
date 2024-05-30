import StylishContainer from "../StylishContainer";
import OrderProcessSection from "../OrderProcessSection";
import ImageContainer1 from "../ImageContainer1";
import "./style.css";
import messages from "./messages.json";

function EnhancedContentSection() {
  return (
    <div className="vision-section">
      <StylishContainer />
      <OrderProcessSection />
      <div className="client-satisfaction-section">
        <div className="order-process-container">
          <p className="order-process-title">{messages["500_happy_clients"]}</p>
          <p className="order-process-description">{messages["lrem_ipsum_tis_kvasiposade_poment_vtirade_ding_eft_1"]}</p>
        </div>
      </div>
      <ImageContainer1 />
    </div>
  );
}

export default EnhancedContentSection;
