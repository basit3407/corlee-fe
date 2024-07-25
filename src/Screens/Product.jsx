import { useParams } from "react-router-dom";
import BottomBar from "../components/App/BottomBar";
import Navbar from "../components/App/Navbar";
import Productcomponent from "../components/App/ProductScreen";
import { useState } from "react";

function Product() {
  const { name, desc } = useParams();
  const [refresh, setRefresh] = useState(0);
  return (
    <>
      <Navbar refresh={refresh} />
      <Productcomponent setRefresh={setRefresh} name={name} desc={desc} />
      <BottomBar />
    </>
  );
}

export default Product;
