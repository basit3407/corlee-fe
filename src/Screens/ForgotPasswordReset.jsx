import { useEffect } from "react";
import FPReset from "../components/App/ForgotPasswordReset";
import { useNavigate, useParams } from "react-router-dom";

function ForgotPasswordReset() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const { uid, token } = useParams();
  useEffect(() => {
    if (!uid || !token) navigate("/");
  }, []);
  return <FPReset uid={uid} token={token} />;
}

export default ForgotPasswordReset;
