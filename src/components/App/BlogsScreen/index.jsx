import Container from "../../UI/Container";
import ContentDisplayWidgetGenerator from "./ContentDisplayWidgetGenerator";
import "./style.css";

function BlogsComponent({ generateContentDisplayWidgetArgs }) {
  return (
    <Container>
      <div className="main-content-container-b">
        <div className="main-content-section-b">
          <ContentDisplayWidgetGenerator
            generateContentDisplayWidgetArgs={generateContentDisplayWidgetArgs}
          />
        </div>
      </div>
    </Container>
  );
}

export default BlogsComponent;
