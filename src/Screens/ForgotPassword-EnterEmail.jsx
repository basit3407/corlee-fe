import { useEffect } from "react";
import FPEnterEmail from "../components/App/ForgotPasswordScreen-EnterEmail";
import Navbar from "../components/App/Navbar";

function ForgotPasswordEnterEmail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar />
      <FPEnterEmail />
    </>
  );
}

export default ForgotPasswordEnterEmail;
