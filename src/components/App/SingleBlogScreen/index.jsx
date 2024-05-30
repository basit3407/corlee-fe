import Container from "../../UI/Container";
import TechInfoBox from "./TechInfoBox";
import "./style.css";

function SingleBlogComponent() {
  return (
    <Container>
      <div className="main-content-container-sb">
        <div className="vertical-centered-column-layout-sb">
          <TechInfoBox />
        </div>
      </div>
    </Container>
  );
}

export default SingleBlogComponent;
