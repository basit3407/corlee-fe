import "./style.css";

function EmailInputBox(props) {
  return (
    <div className="hierarchical-text-container">
      {/* Input Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <input
        value={props.inputvalue}
        onChange={(e) => {
          props.setInputvalue(e.target.value);
        }}
        placeholder="Email address"
        type="text"
        className="input-field-container input-style-f62::placeholder"
      />
    </div>
  );
}

export default EmailInputBox;
