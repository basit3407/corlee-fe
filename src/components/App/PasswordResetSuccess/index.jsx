import SecureUpdateConfirmation from "./SecureUpdateConfirmation";
import "./style.css";
import messages from "./messages.json";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";
import { api } from "../../../config/api";

function ComponentYouSelected(props) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const verify = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/verify-email/${props.token}/`);
      if (response.status == 200) {
        await toast.success("Email verified Successfully");
        localStorage.setItem("emailnotverified", "false");

        setLoading(false);
        navigate("/");
        window.location.reload();
      } else {
        await toast.success("An error occured !");
        setLoading(false);
        navigate("/");
      }
    } catch (e) {
      await toast.success("An error occured !");
      setLoading(false);
      navigate("/");
    }
  };
  return (
    <div className="success-container">
      <div className="secure-password-update-notification">
        <div className="password-update-confirmation-container">
          <SecureUpdateConfirmation {...props} />
          {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <button
            className="login-button-style"
            onClick={() => {
              props.email && props.token ? verify() : navigate("/login");
            }}
            disabled={loading}
          >
            {loading
              ? "Loading..."
              : props.email
              ? "Verify"
              : messages["return_login"]}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ComponentYouSelected;
