import "./style.css";

function ImageContentWithStyle({ imgContent2, colorOption1, borderStyleFromArg31 }) {
  return (
    <div className="color-option-container1" style={{ border: borderStyleFromArg31 }}>
      <p className="text-styler">{colorOption1}</p>
      <img alt="" className="text-icon-container" src={imgContent2} />
    </div>
  );
}

export default ImageContentWithStyle;
