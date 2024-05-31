import { useState } from "react";
import ProductCardView from "../ProductCardView";
import "./style.css";

function ProductCardSelector({ productCardViewArguments }) {
  const [selected_productCardViewArguments, handleClickFunction] = useState(3);

  const isSelected_productCardViewArguments = (index) => {
    return selected_productCardViewArguments === index;
  };

  return (
    <div className="product-highlight-section2">
      {productCardViewArguments.map((data, index) => {
        return (
          <ProductCardView
            {...data}
            key={index}
            selectedClassName_productCardViewArguments={isSelected_productCardViewArguments(index) ? "functional-section-with-dynamic-icon" : ""}
            handleClickFunction={() => handleClickFunction(index)}
          />
        );
      })}
    </div>
  );
}

export default ProductCardSelector;
