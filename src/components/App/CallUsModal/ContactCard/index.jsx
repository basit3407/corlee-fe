import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function ContactCard({ htmlContent1, contactMethodText }) {
  return (
    <div className="contact-info-container">
      <SvgIcon1 className="svg-container" htmlContent1={htmlContent1} />
      <p className="contact-method-text-style">{contactMethodText}</p>
    </div>
  );
}

export default ContactCard;
