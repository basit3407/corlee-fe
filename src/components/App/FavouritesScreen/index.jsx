import Container from "../../UI/Container";
import ProductDisplayWidgetContainer from "./ProductDisplayWidgetContainer";
import "./style.css";

function FavouriteComponent({
  productDisplayWidgetOptions,
  productDisplayWidgetArgs,
  productDisplayWidgetOptions1,
}) {
  return (
    <Container>
      <div className="vertical-centered-layout-fav">
        <div className="main-content-container-fav">
          <ProductDisplayWidgetContainer
            productDisplayWidgetOptions={productDisplayWidgetOptions}
            productDisplayWidgetArgs={productDisplayWidgetArgs}
            productDisplayWidgetOptions1={productDisplayWidgetOptions1}
          />
        </div>
      </div>
    </Container>
  );
}

export default FavouriteComponent;
