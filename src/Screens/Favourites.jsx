import BottomBar from "../components/App/BottomBar";
import FavouriteComponent from "../components/App/FavouritesScreen";
import Navbar from "../components/App/Navbar";
import { mockData } from "../util";

function Favourites() {
  return (
    <>
      <Navbar />
      <FavouriteComponent
        productDisplayWidgetArgs={mockData.productDisplayWidgetArgs}
        productDisplayWidgetOptions={mockData.productDisplayWidgetOptions}
        productDisplayWidgetOptions1={mockData.productDisplayWidgetOptions1}
      />
      <BottomBar />
    </>
  );
}

export default Favourites;
