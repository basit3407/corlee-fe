import ProductInfoSection from "../ProductInfoSection";
import "./style.css";
import messages from "./messages.json";

function OrderProcessSection() {
  return (
    <div className="order-process-section">
      <div className="order-process-flow-container">
        <div className="vertical-centered-container">
          <div className="order-process-container">
            <p className="order-process-title">{messages["order_process"]}</p>
            <p className="order-process-description">{messages["lrem_ipsum_tis_kvasiposade_poment_vtirade_ding_eft"]}</p>
          </div>
        </div>
        <ProductInfoSection />
      </div>
    </div>
  );
}

export default OrderProcessSection;
