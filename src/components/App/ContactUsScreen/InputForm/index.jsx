import "./style.css";
import messages from "./messages.json";

function InputForm() {
  return (
    <div className="fullwidth-container">
      {/* Input with Label Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <div className="horizontal-centered-label-container">
        <label htmlFor="name" className="bold-black-label">
          {messages["name"]}
        </label>
        <input id="name" placeholder="i.e Jone Doe" type="text" className="input-with-label-style input-style-f62::placeholder" />
      </div>
    </div>
  );
}

export default InputForm;
