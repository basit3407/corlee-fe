import { useParams } from "react-router-dom";
import BottomBar from "../components/App/BottomBar";
import Navbar from "../components/App/Navbar";
import Productcomponent from "../components/App/ProductScreen";
import { useEffect, useState } from "react";

function Product() {
  const { name, desc, searchterm } = useParams();
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar refresh={refresh} />
      <Productcomponent
        setRefresh={setRefresh}
        name={name}
        desc={desc}
        searchterm={searchterm}
      />
      <BottomBar />
    </>
  );
}

export default Product;
