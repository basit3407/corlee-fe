import "./style.css";
import messages from "./messages.json";

function ContactInfoSection1() {
  return (
    <div className="contact-info-section2">
      <div className="contact-info-container2">
        <img
          src="/assets/img_1135_8087_efe8e1.svg"
          alt=""
          className="image-container"
        />
      </div>
      <p className="hero-title">{messages["call_us"]}</p>
      <p className="contact-info-text-style">{localStorage.getItem("phone")}</p>
    </div>
  );
}

export default ContactInfoSection1;
