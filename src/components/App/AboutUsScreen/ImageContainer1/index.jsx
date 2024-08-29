import "./style.css";
import logo1 from "./images/logo1.png";
import logo2 from "./images/logo2.png";
import logo3 from "./images/logo3.png";
import logo4 from "./images/logo4.png";
import logo5 from "./images/logo5.png";
import logo6 from "./images/logo6.png";

function ImageContainer1() {
  return (
    <div className="vertical-align-centered-image">
      <img src={logo1} alt="logo1" />
      <img src={logo2} alt="logo2" />
      <img src={logo3} alt="logo3" />
      <img src={logo4} alt="logo4" />
      <img src={logo5} alt="logo5" />
      <img src={logo6} alt="logo6" />
    </div>
  );
}

export default ImageContainer1;
