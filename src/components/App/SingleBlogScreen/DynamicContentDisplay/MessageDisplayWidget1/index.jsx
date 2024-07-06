import "./style.css";
import messages from "./messages.json";

function MessageDisplayWidget1() {
  return (
    <div className="content-container1">
      <p className="highlighted-text-block">
        {messages["accusantium_et_aliquam"]}
      </p>
      <p className="narrative-text-style"></p>
    </div>
  );
}

export default MessageDisplayWidget1;
