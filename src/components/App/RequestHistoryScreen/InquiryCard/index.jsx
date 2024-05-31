import "./style.css";

function InquiryCard({ inquiryTitle2, requestDescription2 }) {
  return (
    <div className="inquiry-section">
      <p className="headline-text-style">{inquiryTitle2}</p>
      <p className="description-snippet">{requestDescription2}</p>
    </div>
  );
}

export default InquiryCard;
