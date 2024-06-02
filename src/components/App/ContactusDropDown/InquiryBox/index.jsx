import "./style.css";

function InquiryBox({ inquiryType }) {
  return (
    <div className="inquiry-type-container">
      <p className="inquiry-type-style">{inquiryType}</p>
    </div>
  );
}

export default InquiryBox;
