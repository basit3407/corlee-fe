import { mockData } from "../../../util";
import Container from "../../UI/Container";
import ProductsMegaMenuMainComp from "./MainComponent";

function ProductsMegaMenu() {
  return (
    <Container>
      <ProductsMegaMenuMainComp
        productCardViewArguments={mockData.productCardViewArguments}
      />
    </Container>
  );
}

export default ProductsMegaMenu;
