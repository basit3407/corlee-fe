import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";
import { useState } from "react";

function MessageForm(props) {
  const [showoptions, setShowoptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div className="subject-container">
      {/* Select with Label Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <div
        className="horizontal-centered-label-container"
        onClick={() => setShowoptions(!showoptions)}
        style={{ cursor: "pointer" }}
      >
        <label className="bold-black-label">{messages["subject"]}</label>
        <div className="subject-container-with-icon">
          <p className="product-description-text-style">
            {selectedOption ? selectedOption : messages["ie_want_buy_woven"]}
          </p>
          <SvgIcon1 className="svg-container3" open={showoptions} />
        </div>
      </div>
      {showoptions && (
        <div className="optionsincontact">
          <div
            className="option"
            onClick={() => {
              props.onChange("general");
              setSelectedOption("General Inquiry");
              setShowoptions(false);
            }}
          >
            <p>General Inquiry</p>
          </div>
          <div
            className="option"
            onClick={() => {
              props.onChange("product");
              setSelectedOption("Product Inquiry");
              setShowoptions(false);
            }}
          >
            <p>Product Inquiry</p>
          </div>
          <div
            className="option"
            onClick={() => {
              props.onChange("order");
              setSelectedOption("Oreder Inquiry");
              setShowoptions(false);
            }}
          >
            <p>Order Inquiry</p>
          </div>
          <div
            className="option"
            onClick={() => {
              props.onChange("Customization");
              setSelectedOption("custom");
              setShowoptions(false);
            }}
          >
            <p>Customization</p>
          </div>
          <div
            className="option"
            onClick={() => {
              props.onChange("other");
              setSelectedOption("Other");
              setShowoptions(false);
            }}
          >
            <p>Other</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MessageForm;
