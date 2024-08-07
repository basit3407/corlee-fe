import { useState } from "react";
import UsernameInputWidget from "../UsernameInputWidget";
import PasswordInputWidget from "../PasswordInputWidget";
import "./style.css";
import messages from "./messages.json";
// import useAuthStore from "../../../../stores/useAuthstore"; // Import the auth store
import { useNavigate } from "react-router-dom";
import { api, setAuthToken } from "../../../../config/api";
import { toast } from "sonner";

function UserAuthenticationForm() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await api.post("/login/", formData);
      if (response.status == 200) {
        if (!response.data.user.is_verified) {
          localStorage.setItem("emailnotverified", "true");
        }
        const token = response.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("NameLetter", response.data.user.name[0]);
        console.log(response);
        setAuthToken(token);
        navigate("/");
        toast.success("Login Successful");
      } else {
        setError(response.data[Object.keys(response.data)[0]]);
      }
      setLoading(false);
    } catch (error) {
      toast.error(
        `${Object.keys(error.response.data)[0]} : ${
          error.response.data[Object.keys(error.response.data)[0]]
        }` || "Something went wrong"
      );
      setLoading(false);
    }
  };

  return (
    <div className="login-section2">
      <form>
        <UsernameInputWidget
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <PasswordInputWidget
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <div className="login-section">
          <div className="login-section1">
            <div className="checkbox-container">
              <input
                id="remember-me"
                type="checkbox"
                defaultChecked={false}
                className="hidden-input"
              />
              <img className="hidden-icon img-content-66044729" />
            </div>
            <label htmlFor="remember-me" className="remember-me-label">
              {messages["remember_me"]}
            </label>
          </div>
          <p
            className="user-prompt-text-style"
            onClick={() => {
              navigate("/forgot");
            }}
            style={{
              cursor: "pointer",
            }}
          >
            {messages["forgot_password"]}
          </p>
        </div>
        <button
          className="login-button-style"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "loading..." : messages["login"]}
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <div className="account-info-container">
        <p className="account-info-text-style">{messages["dont_account"]}</p>
        <p
          className="sign-up-link-style"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/signup");
          }}
        >
          {messages["sign_up"]}
        </p>
      </div>
    </div>
  );
}

export default UserAuthenticationForm;
