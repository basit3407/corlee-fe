import { Navigate } from "react-router-dom";
import LoginComponent from "../components/App/LoginScreen";
import Navbar from "../components/App/Navbar";
import { useEffect } from "react";

function Login() {
  const token = localStorage.getItem("token");
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return token ? (
    <Navigate to="/" />
  ) : (
    <>
      <Navbar />
      <LoginComponent />
    </>
  );
}

export default Login;
