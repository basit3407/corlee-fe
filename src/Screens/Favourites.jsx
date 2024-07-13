import BottomBar from "../components/App/BottomBar";
import Navbar from "../components/App/Navbar";
import Productcomponent from "../components/App/ProductScreen";

function Favourites() {
  return (
    <>
      <Navbar />
      <Productcomponent fav={true} />
      <BottomBar />
    </>
  );
}

export default Favourites;
