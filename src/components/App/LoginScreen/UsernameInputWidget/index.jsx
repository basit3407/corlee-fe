import "./style.css";

function UsernameInputWidget({ name, value, onChange }) {
  return (
    <div className="center-box">
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder="Username"
        type="text"
        className="input-with-border-radius input-style-f62::placeholder"
      />
    </div>
  );
}

export default UsernameInputWidget;
