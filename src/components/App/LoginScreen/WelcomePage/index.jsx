import StylishContentBlock from "../StylishContentBlock";
import UserAuthenticationForm from "../UserAuthenticationForm";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";
import useAuthStore from "../../../../stores/useAuthstore"; // Import the auth store

function WelcomePage() {
  const googleLogin = useAuthStore((state) => state.googleLogin); // Get the googleLogin method from the store
  const loading = useAuthStore((state) => state.loading); // Get the loading state

  return (
    <div className="hero-section2">
      <div className="central-content-panel">
        <p className="hero-title-text-style">{messages["welcome_corlee"]}</p>
        <p className="central-text-block">
          {messages["lrem_ipsum_suledes_plankning_till_heterossade_tosn"]}
        </p>
        <button
          className="button-with-icon"
          onClick={googleLogin} // Connect the googleLogin method to the button click event
          disabled={loading} // Disable the button if loading
        >
          <SvgIcon1 className="svg-container" />
          {loading ? "...loading" : messages["login_google"]}
        </button>
        <StylishContentBlock />
        <UserAuthenticationForm />
      </div>
      <div className="login-section6">
        <img
          src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_3084_f96278.jpeg"
          className="image-container-full-width"
        />
      </div>
    </div>
  );
}

export default WelcomePage;
