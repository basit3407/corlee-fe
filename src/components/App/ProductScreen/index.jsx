import Container from "../../UI/Container";
import ProductSection from "./ProductSection";
import "./style.css";

function Productcomponent(props) {
  return (
    <Container>
      <div className="main-content-container">
        <div className="main-content-section">
          <ProductSection {...props} />
        </div>
      </div>
    </Container>
  );
}

export default Productcomponent;
