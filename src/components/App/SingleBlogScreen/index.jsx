import Container from "../../UI/Container";
import DynamicContentDisplay from "./DynamicContentDisplay";
import ImageComponent from "./ImageComponent/Index";
import TechInfoBox from "./TechInfoBox";
import "./style.css";

function SingleBlogComponent() {
  return (
    <Container>
      <div className="main-content-container-sb">
        <div className="vertical-centered-column-layout-sb">
          <TechInfoBox />
          <ImageComponent />
          <DynamicContentDisplay />
        </div>
      </div>
    </Container>
  );
}

export default SingleBlogComponent;
