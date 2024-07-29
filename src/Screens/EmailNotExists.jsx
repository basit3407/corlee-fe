import { useEffect } from "react";
import ComponentYouSelected from "../components/App/EmailNotExist";
import Navbar from "../components/App/Navbar";

function EmailNotExists() {
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

export default EmailNotExists;
