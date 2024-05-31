import StylishInputBox from "../StylishInputBox";
import "./style.css";
import messages from "./messages.json";

function StyledItemDisplay() {
  return (
    <div className="fullwidth-container1">
      <p className="bold-black-text">{messages["item_code"]}</p>
      <StylishInputBox />
    </div>
  );
}

export default StyledItemDisplay;
