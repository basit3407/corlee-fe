import ImageContentBox from "../ImageContentBox";
import { theme } from "../../theme";
import "./style.css";

function ImageContentGallery({ imageOptionsList }) {
  const imageContentBoxStyles = [{ borderStyleFromArg31: theme.others.BORDER_A497A2A3 }, { borderStyleForDiv1: theme.others.BORDER_A497A2A3 }, {}, {}];
  return (
    <div className="fullwidth-container">
      {imageOptionsList.map((data, index) => {
        return <ImageContentBox {...data} key={index} {...imageContentBoxStyles[index]} />;
      })}
    </div>
  );
}

export default ImageContentGallery;
