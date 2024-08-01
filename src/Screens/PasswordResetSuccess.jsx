import { useEffect } from "react";
import ComponentYouSelected from "../components/App/PasswordResetSuccess";
import { useParams } from "react-router-dom";

function PasswordResetSuccess(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const { token } = useParams();
  return props.isEmailVerified ? (
    <ComponentYouSelected email={true} token={token} />
  ) : (
    <ComponentYouSelected />
  );
}

export default PasswordResetSuccess;
