import { useParams } from "react-router-dom";
import BottomBar from "../components/App/BottomBar";
import GeneralEnquiryComponent from "../components/App/GeneralEnquiry Screen";
import Navbar from "../components/App/Navbar";
import { useEffect } from "react";

function GeneralEnquiry() {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar />
      <GeneralEnquiryComponent id={id} />
      <BottomBar />
    </>
  );
}

export default GeneralEnquiry;
