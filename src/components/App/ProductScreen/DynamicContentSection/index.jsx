import MessageDisplay from "../MessageDisplay";
import StylishLayoutBuilder from "../StylishLayoutBuilder";
import "./style.css";
import messages from "./messages.json";

function DynamicContentSection() {
  return (
    <div className="material-card-container">
      <MessageDisplay />
      <StylishLayoutBuilder />
      {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <button className="primary-button-style">{messages["load_more"]}</button>
    </div>
  );
}

export default DynamicContentSection;
