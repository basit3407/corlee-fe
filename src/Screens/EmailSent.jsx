import { useEffect } from "react";
import ComponentYouSelected from "../components/App/EmailSentScreen";
import Navbar from "../components/App/Navbar";

function EmailSent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar />
      <ComponentYouSelected />
    </>
  );
}

export default EmailSent;
