import ShippingAddressMainComp from "./ShippingAddressMainComp";

function ShippingDetailsChangeModal() {
  return (
    <div
      style={{ display: "inline-block", width: "636px" }}
      data-ignore="used only for top most containter width"
    >
      <ShippingAddressMainComp />;
    </div>
  );
}

export default ShippingDetailsChangeModal;
