import "./style.css";

function ImageBox({ imgContent3, colorOption3, borderStyleForDiv1 }) {
  return (
    <div className="flex-box-container-with-text" style={{ border: borderStyleForDiv1 }}>
      <p className="text-styler">{colorOption3}</p>
      <img alt="" className="text-icon-container" src={imgContent3} />
    </div>
  );
}

export default ImageBox;
