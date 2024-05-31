import SortItemsView from "../SortItemsView";
import ColorfulImageGallery from "../ColorfulImageGallery";
import "./style.css";

function ColorfulGalleryView({ imageOptionsList }) {
  return (
    <div className="container-sort-options">
      <SortItemsView />
      <ColorfulImageGallery imageOptionsList={imageOptionsList} />
    </div>
  );
}

export default ColorfulGalleryView;
