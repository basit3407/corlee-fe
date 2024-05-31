import ContentDisplayWidget from "../ContentDisplayWidget";
import "./style.css";

function ContentRenderer({ generateContentDisplayWidgetArgs }) {
  return (
    <div className="article-card-layout1">
      {generateContentDisplayWidgetArgs.map((data, index) => {
        return <ContentDisplayWidget {...data} key={index} />;
      })}
    </div>
  );
}

export default ContentRenderer;
