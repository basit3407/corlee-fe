import ProductTableRenderer from "./ProductTableRenderer";
import PersonalProfileButtonSection from "./PersonalProfileButtonSection";
import "./style.css";
import messages from "./messages.json";
import Container from "../../UI/Container";

function BagScreenMainComp({ productTableRowsData }) {
  return (
    <Container>
      <div className="main-content-container1">
        <div className="main-content-container">
          <div className="shopping-cart-details-section">
            <div className="shopping-bag-details-section">
              <div className="shopping-bag-header">
                <p className="shopping-bag-title">{messages["shopping_bag"]}</p>
                <p className="shopping-bag-info">{messages["4_items"]}</p>
              </div>
              <ProductTableRenderer
                productTableRowsData={productTableRowsData}
              />
            </div>
            <div className="personal-details-section3">
              <PersonalProfileButtonSection />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default BagScreenMainComp;
