import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Screens/Home";
import Login from "../Screens/Login";
import ForgotPasswordEnterEmail from "../Screens/ForgotPassword-EnterEmail";

function Approuter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPasswordEnterEmail />} />
      </Routes>
    </Router>
  );
}

export default Approuter;
