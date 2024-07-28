import BottomBar from "../components/App/BottomBar";
import Navbar from "../components/App/Navbar";
import GeneralEnquiryComponent from "../components/App/GeneralEnquiry Screen";
import { mockData } from "../util";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function ProductEnquiry() {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar />
      <GeneralEnquiryComponent id={id} product={true} />
      <BottomBar />
    </>
  );
}

export default ProductEnquiry;
