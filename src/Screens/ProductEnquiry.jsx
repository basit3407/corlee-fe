import BottomBar from "../components/App/BottomBar";
import Navbar from "../components/App/Navbar";
import GeneralEnquiryComponent from "../components/App/GeneralEnquiry Screen";
import { mockData } from "../util";

function ProductEnquiry() {
  return (
    <>
      <Navbar />
      <GeneralEnquiryComponent product={true} />
      <BottomBar />
    </>
  );
}

export default ProductEnquiry;
