import ProductDisplayLayout from "../ProductDisplayLayout";
import ProductDisplayBlock from "../ProductDisplayBlock";
import "./style.css";

function ProductDisplayWidgetContainer({ productDisplayWidgetOptions, productDisplayWidgetArgs, productDisplayWidgetOptions1 }) {
  return (
    <div className="favorite-products-list">
      <ProductDisplayLayout productDisplayWidgetOptions={productDisplayWidgetOptions} productDisplayWidgetArgs={productDisplayWidgetArgs} productDisplayWidgetOptions1={productDisplayWidgetOptions1} />
      <ProductDisplayBlock />
    </div>
  );
}

export default ProductDisplayWidgetContainer;
