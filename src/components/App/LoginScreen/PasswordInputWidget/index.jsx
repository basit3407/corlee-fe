import "./style.css";
import SvgIcon1 from "../../ForgotPasswordReset/PasswordInputWidget/icons/SvgIcon1";
import { useState } from "react";

function PasswordInputWidget({ name, value, onChange }) {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="center-box">
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder="Password"
        type={showPass ? "text" : "password"}
        className="input-with-border-radius input-style-f62::placeholder"
      />
      <SvgIcon1
        className="svginlogin"
        onClick={() => {
          setShowPass(!showPass);
        }}
      />
    </div>
  );
}

export default PasswordInputWidget;
