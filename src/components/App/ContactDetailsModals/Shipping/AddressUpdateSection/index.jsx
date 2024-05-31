import AddressInputWidget from "../AddressInputWidget";
import "./style.css";
import messages from "./messages.json";

function AddressUpdateSection() {
  return (
    <div className="address-section-container">
      <AddressInputWidget />
      {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <button className="update-button">{messages["updates"]}</button>
    </div>
  );
}

export default AddressUpdateSection;
