import AddressUpdateSection from "../AddressUpdateSection";
import "./style.css";
import messages from "./messages.json";

function ShippingAddressMainComp() {
  return (
    <div className="shipping-details-container1">
      <div className="shipping-details-container2">
        <div className="shipping-details-container">
          <p className="shipping-details-heading">
            {messages["shipping_details"]}
          </p>
          <p className="shipping-details-text">
            {messages["update_shipping_details"]}
          </p>
        </div>
      </div>
      <AddressUpdateSection />
    </div>
  );
}

export default ShippingAddressMainComp;
