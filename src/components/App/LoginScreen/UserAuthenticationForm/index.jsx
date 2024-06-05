import { useState } from "react";
import UsernameInputWidget from "../UsernameInputWidget";
import PasswordInputWidget from "../PasswordInputWidget";
import "./style.css";
import messages from "./messages.json";
import useAuthStore from "../../../../stores/useAuthstore"; // Import the auth store

function UserAuthenticationForm() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const login = useAuthStore((state) => state.login); // Get the login method from the store
  const loading = useAuthStore((state) => state.loading); // Get the loading state
  const error = useAuthStore((state) => state.error); // Get the error state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="login-section2">
      <form onSubmit={handleSubmit}>
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
          <p className="user-prompt-text-style">
            {messages["forgot_password"]}
          </p>
        </div>
        <button className="login-button-style" type="submit" disabled={loading}>
          {loading ? "...loading" : messages["login"]}
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <div className="account-info-container">
        <p className="account-info-text-style">{messages["dont_account"]}</p>
        <p className="sign-up-link-style">{messages["sign_up"]}</p>
      </div>
    </div>
  );
}

export default UserAuthenticationForm;
