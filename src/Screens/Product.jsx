import { useParams } from "react-router-dom";
import BottomBar from "../components/App/BottomBar";
import Navbar from "../components/App/Navbar";
import Productcomponent from "../components/App/ProductScreen";

function Product() {
  const { name, desc } = useParams();
  return (
    <>
      <Navbar />
      <Productcomponent name={name} desc={desc} />
      <BottomBar />
    </>
  );
}

export default Product;
