import Container from "../../UI/Container";
import ProductSection from "./ProductSection";
import "./style.css";

function Productcomponent() {
  return (
    <Container>
      <div className="main-content-container">
        <div className="main-content-section">
          <ProductSection />
        </div>
      </div>
    </Container>
  );
}

export default Productcomponent;
