import IdentityCardView from "../IdentityCardView";
import StylishContentBlock from "../StylishContentBlock";
import EmailDisplayWidget from "../EmailDisplayWidget";
import SecureLoginWidget from "../SecureLoginWidget";
import AddressInputWidget from "../AddressInputWidget";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";
import { useState } from "react";
import { api, setAuthToken } from "../../../../config/api";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function UserRegistrationLayout({ loading, setLoading }) {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlesubmit = async () => {
    try {
      setLoading(true);
      const response = await api.post("/register/", formData);
      if (response.status === 201) {
        localStorage.setItem("emailnotverified", "true");
        const token = response.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("NameLetter", response.data.user.name[0]);
        setAuthToken(token);
        navigate("/");

        toast.success("Account created successfully");
      }
      setLoading(false);
    } catch (error) {
      setError(
        error.response
          ? error.response.data[Object.keys(error.response.data)[0]]
          : error.message
      );
      setLoading(false);
    }
  };

  return (
    <div className="vertical-form-container1">
      <div className="hierarchical-flex-container">
        <IdentityCardView value={formData.username} onChange={handleChange} />
        <StylishContentBlock value={formData.name} onChange={handleChange} />
      </div>
      <div className="hierarchical-flex-container">
        <EmailDisplayWidget value={formData.email} onChange={handleChange} />
        <SecureLoginWidget value={formData.password} onChange={handleChange} />
      </div>
      <div className="account-creation-form-input-group">
        <input
          type="text"
          className="id-label-text-style"
          placeholder="Company Name"
          name="company_name"
          onChange={handleChange}
          value={formData.company_name}
        />
        <div className="id-container">
          <SvgIcon1 className="svg-container1" />
        </div>
      </div>
      <AddressInputWidget value={formData.address} onChange={handleChange} />
      <div className="hierarchical-flex-container">
        <div className="flexbox-item">
          {/* Input Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <input
            placeholder="Phone"
            type="text"
            className="input-field-with-border input-style-f62::placeholder"
            name="phone"
            onChange={handleChange}
            value={formData.phone}
          />
        </div>
        <div className="flex-grow-shrink-basis">
          {/* Input Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <input
            placeholder="Mobile phone"
            type="text"
            className="input-field-with-border input-style-f62::placeholder"
            name="mobile_phone"
            onChange={handleChange}
            value={formData.mobile_phone}
          />
        </div>
      </div>
      {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <button
        className="account-creation-button-style"
        disabled={loading}
        onClick={handlesubmit}
      >
        {loading ? "loading..." : messages["create_account"]}
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default UserRegistrationLayout;
