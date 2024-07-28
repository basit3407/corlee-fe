import ContentDisplayWidget from "../ContentDisplayWidget";
import "./style.css";

function ContentRenderer({ blogs }) {
  return (
    <div className="article-card-layout1">
      <div className="article-card-layout-blogs">
        {blogs.map((data, index) => {
          return <ContentDisplayWidget {...data} key={index} />;
        })}
      </div>
    </div>
  );
}

export default ContentRenderer;
