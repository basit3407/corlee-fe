import { useEffect } from "react";
import ComponentYouSelected from "../components/App/PasswordResetSuccess";

function PasswordResetSuccess() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return <ComponentYouSelected />;
}

export default PasswordResetSuccess;
