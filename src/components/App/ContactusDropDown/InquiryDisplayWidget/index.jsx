import InquiryBox from "../InquiryBox";
import "./style.css";

function InquiryDisplayWidget({ possibleInquiryTypes }) {
  return (
    <div className="inquiry-type-container1">
      {possibleInquiryTypes.map((data, index) => {
        return <InquiryBox {...data} key={index} />;
      })}
    </div>
  );
}

export default InquiryDisplayWidget;
