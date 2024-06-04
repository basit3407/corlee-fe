import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import SvgIcon4 from "./icons/SvgIcon4";
import "./style.css"; // Ensure your custom CSS is imported
import messages from "./messages.json";

function DynamicContentDisplay() {
  return (
    <div className="contact-info-container-nav flex items-center mt-4 md:mt-0">
      <SvgIcon1 className="svg-container1-nav mr-2" />
      <p className="contact-info-text-style-nav mb-0">{messages["call_us"]}</p>
      <SvgIcon2 className="svg-container2-nav mx-2" />
      <SvgIcon3 className="svg-container2-nav mr-2" />
      <span className="badge-with-icon-nav badge bg-primary">2</span>
      <SvgIcon4 className="svg-container2-nav ml-2" />
    </div>
  );
}

export default DynamicContentDisplay;
