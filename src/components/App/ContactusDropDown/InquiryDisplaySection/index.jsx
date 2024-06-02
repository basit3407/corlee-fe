import InquiryDisplayWidget from "../InquiryDisplayWidget";
import MessageDisplay from "../MessageDisplay";
import "./style.css";

function InquiryDisplaySection({ possibleInquiryTypes }) {
  return (
    <div className="inquiry-type-container2">
      <InquiryDisplayWidget possibleInquiryTypes={possibleInquiryTypes} />
      <MessageDisplay />
    </div>
  );
}

export default InquiryDisplaySection;
