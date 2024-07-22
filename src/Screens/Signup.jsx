import { Navigate } from "react-router-dom";
import Navbar from "../components/App/Navbar";
import SignupComponent from "../components/App/SignupScreen";
import { useEffect } from "react";

function Signup() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const token = localStorage.getItem("token");
  return token ? (
    <Navigate to="/" />
  ) : (
    <>
      <Navbar />
      <SignupComponent />
    </>
  );
}

export default Signup;
