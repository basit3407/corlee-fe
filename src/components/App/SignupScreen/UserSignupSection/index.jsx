import StylishLayout from "../StylishLayout";
import UserRegistrationLayout from "../UserRegistrationLayout";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";
import { useNavigate } from "react-router-dom";
import { googleLogin } from "../../../../firebaseConfig.js";
import { api, setAuthToken } from "../../../../config/api.js";
import { useState } from "react";
import { toast } from "sonner";

function UserSignupSection() {
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
          toast.success("Account created successfully");
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
    <div className="vertical-form-container">
      {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <button
        className="button-with-icon-and-text"
        onClick={logGoogleLoginInfo}
      >
        <SvgIcon1 className="svg-container" />
        {messages["sign_up_google"]}
      </button>
      <StylishLayout />
      <UserRegistrationLayout loading={loading} setLoading={setLoading} />
      <div className="account-actions-container">
        <p className="login-prompt-text-style">{messages["already_account"]}</p>
        <p
          className="login-link-text-style"
          onClick={() => {
            navigate("/login");
          }}
          style={{ cursor: "pointer" }}
        >
          {messages["login"]}
        </p>
      </div>
    </div>
  );
}

export default UserSignupSection;
