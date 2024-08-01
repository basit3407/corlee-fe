import { useEffect } from "react";
import ComponentYouSelected from "../components/App/EmailNotExist";
import Navbar from "../components/App/Navbar";
import { useParams } from "react-router-dom";

function EmailNotExists() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const { email } = useParams();
  return (
    <>
      <Navbar />
      <ComponentYouSelected email={email} />
    </>
  );
}

export default EmailNotExists;
