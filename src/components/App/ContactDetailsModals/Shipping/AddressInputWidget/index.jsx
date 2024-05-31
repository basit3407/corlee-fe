import "./style.css";
import messages from "./messages.json";

function AddressInputWidget() {
  return (
    <div className="address-label-container">
      {/* Input with Label Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <div className="address-label-container1">
        <label htmlFor="address" className="address-label-style">
          {messages["address"]}
        </label>
        <input id="address" placeholder="5857 Maximilian Plains" type="text" className="address-input-style input-style-f62::placeholder" />
      </div>
    </div>
  );
}

export default AddressInputWidget;
