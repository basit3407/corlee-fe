import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Screens/Home";
import Login from "../Screens/Login";
import ForgotPasswordEnterEmail from "../Screens/ForgotPassword-EnterEmail";
import ForgotPasswordReset from "../Screens/ForgotPasswordReset";
import Signup from "../Screens/Signup";
import Continiewithgoogle from "../Screens/Continiewithgoogle";
import AboutUs from "../Screens/AboutUs";
import Product from "../Screens/Product";
import Favourites from "../Screens/Favourites";
import SingleBlog from "../Screens/SingleBlog";
import Blogs from "../Screens/Blogs";
import Events from "../Screens/Events";

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
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/favourite" element={<Favourites />} />
        <Route path="/blog" element={<SingleBlog />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default Approuter;
