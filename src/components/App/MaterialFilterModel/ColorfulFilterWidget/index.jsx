import ColorfulDisplayWidget from "../ColorfulDisplayWidget";
import "./style.css";
import messages from "./messages.json";

function ColorfulFilterWidget({ imageOptionsList }) {
  return (
    <div className="filter-items-container">
      <p className="filter-heading">{messages["filter_items"]}</p>
      <ColorfulDisplayWidget imageOptionsList={imageOptionsList} />
    </div>
  );
}

export default ColorfulFilterWidget;
