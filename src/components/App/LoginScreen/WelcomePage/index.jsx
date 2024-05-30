import StylishContentBlock from "../StylishContentBlock";
import UserAuthenticationForm from "../UserAuthenticationForm";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function WelcomePage() {
  return (
    <div className="hero-section2">
      <div className="central-content-panel">
        <p className="hero-title-text-style">{messages["welcome_corlee"]}</p>
        <p className="central-text-block">{messages["lrem_ipsum_suledes_plankning_till_heterossade_tosn"]}</p>
        {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
        <button className="button-with-icon">
          <SvgIcon1 className="svg-container" />
          {messages["login_google"]}
        </button>
        <StylishContentBlock />
        <UserAuthenticationForm />
      </div>
      <div className="login-section3">
        <img src="/assets/img_1091_3084_f96278.jpeg" className="image-container-full-width" />
      </div>
    </div>
  );
}

export default WelcomePage;
