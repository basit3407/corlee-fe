import { useEffect } from "react";
import ContinueWithGoogleComponent from "../components/App/ContinueWithGoogleScreen";
import Navbar from "../components/App/Navbar";

function Continiewithgoogle() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar />
      <ContinueWithGoogleComponent />
    </>
  );
}

export default Continiewithgoogle;
