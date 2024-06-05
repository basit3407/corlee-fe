import "./style.css";

function PasswordInputWidget({ name, value, onChange }) {
  return (
    <div className="center-box">
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder="Password"
        type="password"
        className="input-with-border-radius input-style-f62::placeholder"
      />
    </div>
  );
}

export default PasswordInputWidget;
