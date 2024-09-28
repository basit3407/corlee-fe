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
      <img
        src={logo1}
        alt="logo1"
        style={{ transform: "translate(0%, -50%)" }}
      />
      <img
        src={logo2}
        alt="logo2"
        style={{ transform: "translate(0%, -50%)" }}
      />
      <img
        src={logo3}
        alt="logo3"
        style={{ transform: "translate(0%, -50%)" }}
      />
      <img
        src={logo4}
        alt="logo4"
        style={{ transform: "translate(0%, -50%)" }}
      />
      <img
        src={logo5}
        alt="logo5"
        style={{ transform: "translate(0%, -50%)" }}
      />
      <img
        src={logo6}
        alt="logo6"
        style={{ transform: "translate(0%, -50%)" }}
      />
    </div>
  );
}

export default ImageContainer1;
