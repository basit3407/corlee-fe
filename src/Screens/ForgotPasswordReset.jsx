import { useEffect } from "react";
import FPReset from "../components/App/ForgotPasswordReset";

function ForgotPasswordReset() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return <FPReset />;
}

export default ForgotPasswordReset;
