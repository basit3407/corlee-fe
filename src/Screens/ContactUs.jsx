import { useEffect } from "react";
import BottomBar from "../components/App/BottomBar";
import ComponentYouSelected from "../components/App/ContactUsScreen";
import Navbar from "../components/App/Navbar";

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar />
      <ComponentYouSelected />
      <BottomBar />
    </>
  );
}

export default ContactUs;
