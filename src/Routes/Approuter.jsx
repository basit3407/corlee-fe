import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Screens/Home";

function Approuter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default Approuter;
