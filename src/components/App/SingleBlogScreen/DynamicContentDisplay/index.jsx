import MessageDisplayWidget1 from "./MessageDisplayWidget1";
import ContentBlock from "./ContentBlock";
import MessageDisplayWidget from "./MessageDisplayWidget";
import MessageDisplayWidget2 from "./MessageDisplayWidget2";
import "./style.css";
import messages from "./messages.json";

function DynamicContentDisplay(data) {
  console.log(data);
  return (
    <div className="content-container  content-container-in-single-blog">
      <p dangerouslySetInnerHTML={{ __html: data.content }}></p>
    </div>
  );
}

export default DynamicContentDisplay;
