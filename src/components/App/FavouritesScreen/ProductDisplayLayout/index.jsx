import ProductDisplayRenderer from "../ProductDisplayRenderer";
import ProductDisplayRenderer1 from "../ProductDisplayRenderer1";
import ProductDisplayRenderer2 from "../ProductDisplayRenderer2";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function ProductDisplayLayout({ productDisplayWidgetOptions, productDisplayWidgetArgs, productDisplayWidgetOptions1 }) {
  return (
    <div className="favorite-section">
      <p className="favorite-title-text-style">{messages["favorites"]}</p>
      <p className="favorite-description">{messages["lrem_ipsum_tis_kvasiposade_poment_vtirade_ding"]}</p>
      {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <button className="favorite-button">
        <SvgIcon1 className="svg-container4" />
        {messages["filter"]}
      </button>
      <div className="favorites-section">
        <ProductDisplayRenderer productDisplayWidgetOptions={productDisplayWidgetOptions} />
        <ProductDisplayRenderer1 productDisplayWidgetOptions1={productDisplayWidgetOptions1} />
        <ProductDisplayRenderer2 productDisplayWidgetArgs={productDisplayWidgetArgs} />
      </div>
    </div>
  );
}

export default ProductDisplayLayout;
