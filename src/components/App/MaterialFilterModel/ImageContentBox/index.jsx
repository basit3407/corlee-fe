import ImageContentWithStyle from "../ImageContentWithStyle";
import ImageBox from "../ImageBox";
import "./style.css";

function ImageContentBox({ imgContent2, imgContent3, colorOption1, colorOption3, borderStyleFromArg31, borderStyleForDiv1 }) {
  return (
    <div className="color-option-container-flex-box-layout color-option-container">
      <ImageContentWithStyle imgContent2={imgContent2} colorOption1={colorOption1} borderStyleFromArg31={borderStyleFromArg31} />
      <ImageBox imgContent3={imgContent3} colorOption3={colorOption3} borderStyleForDiv1={borderStyleForDiv1} />
    </div>
  );
}

export default ImageContentBox;
