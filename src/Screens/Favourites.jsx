import { useState } from "react";
import BottomBar from "../components/App/BottomBar";
import Navbar from "../components/App/Navbar";
import Productcomponent from "../components/App/ProductScreen";

function Favourites() {
  const [refresh, setRefresh] = useState(0);
  return (
    <>
      <Navbar refresh={refresh} />
      <Productcomponent setRefresh={setRefresh} fav={true} />
      <BottomBar />
    </>
  );
}

export default Favourites;
