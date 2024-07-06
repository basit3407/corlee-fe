import ContentDisplayWidget from "../ContentDisplayWidget";
import "./style.css";

function ContentRenderer({ generateContentDisplayWidgetArgs }) {
  return (
    <div className="article-card-layout1">
      <div className="article-card-layout-blogs">
        {generateContentDisplayWidgetArgs.map((data, index) => {
          return <ContentDisplayWidget {...data} key={index} />;
        })}
      </div>
    </div>
  );
}

export default ContentRenderer;
