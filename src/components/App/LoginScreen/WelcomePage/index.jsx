import StylishContentBlock from "../StylishContentBlock";
import UserAuthenticationForm from "../UserAuthenticationForm";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";
import { googleLogin } from "../../../../firebaseConfig";
import { api, setAuthToken } from "../../../../config/api";
import { toast } from "sonner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  async function logGoogleLoginInfo() {
    try {
      setLoading(true);
      const { token, error } = await googleLogin();
      if (error) {
        toast.error("Google login failed.");
        setLoading(false);
        return;
      }
      const response = await api.post("/google-login/", {
        idToken: token,
      });
      if (response.status == 200) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("NameLetter", response.data.user.name[0]);
        setAuthToken(token);
        if (!response.data.user.company_name) {
          navigate("/addCompanyDetails");
          toast.success("Please enter your company details");
          localStorage.setItem("Company", "false");
        } else {
          navigate("/");
          toast.success("Login successful.");
        }
      } else {
        toast.error("Something went wrong");
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  return (
    <div className="hero-section2">
      <div className="central-content-panel">
        <p className="hero-title-text-style">{messages["welcome_corlee"]}</p>
        <p className="central-text-block">
          {messages["lrem_ipsum_suledes_plankning_till_heterossade_tosn"]}
        </p>
        <button
          className="button-with-icon"
          onClick={logGoogleLoginInfo}
          disabled={loading}
        >
          <SvgIcon1 className="svg-container" />
          {loading ? "loading..." : messages["login_google"]}
        </button>
        <StylishContentBlock />
        <UserAuthenticationForm />
      </div>
      <div className="login-section6">
        <img
          src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/img_1091_3084_f96278.webp"
          className="image-container-full-width"
        />
      </div>
    </div>
  );
}

export default WelcomePage;
