import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Screens/Home";
import Login from "../Screens/Login";
import ForgotPasswordEnterEmail from "../Screens/ForgotPassword-EnterEmail";
import ForgotPasswordReset from "../Screens/ForgotPasswordReset";
import Signup from "../Screens/Signup";
import Continiewithgoogle from "../Screens/Continiewithgoogle";

function Approuter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPasswordEnterEmail />} />
        <Route path="/reset" element={<ForgotPasswordReset />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/google" element={<Continiewithgoogle />} />
      </Routes>
    </Router>
  );
}

export default Approuter;
