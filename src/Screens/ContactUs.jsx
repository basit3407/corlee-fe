import { useEffect } from "react";
import BottomBar from "../components/App/BottomBar";
import ComponentYouSelected from "../components/App/ContactUsScreen";
import Navbar from "../components/App/Navbar";
import { useParams } from "react-router-dom";

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const { value } = useParams();
  return (
    <>
      <Navbar />
      <ComponentYouSelected contact={true} value={value} />
      <BottomBar contact={true} />
    </>
  );
}

export default ContactUs;
