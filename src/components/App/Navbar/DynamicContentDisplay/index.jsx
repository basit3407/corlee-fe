import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import SvgIcon4 from "./icons/SvgIcon4";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import "./style.css";
import messages from "./messages.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DynamicContentDisplay(props) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {open ? (
        <ClearIcon className="menu-icon-nav" onClick={() => setOpen(false)} />
      ) : (
        <MenuIcon className="menu-icon-nav" onClick={() => setOpen(true)} />
      )}

      <div
        className={
          open
            ? "contact-info-container-nav"
            : "contact-info-container-nav hidden2"
        }
      >
        <div className="callout-container-nav">
          <SvgIcon1 className="svg-container1-nav" />
          <input placeholder="Search" type="text" className="searchbar" />
        </div>
        <p
          className="contact-info-text-style-nav"
          style={{ cursor: "pointer" }}
          onClick={() => {
            props.changeShowcall();
          }}
        >
          {messages["call_us"]}
        </p>
        <div className="contact-info-section-nav">
          <div
            className="card-container-nav"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/favourite")}
          >
            <div className="circular-text-container-nav">
              <SvgIcon2 className="svg-container2-nav" />
            </div>
          </div>
          <div
            className="card-container-nav"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            <div className="circular-text-container-nav">
              <SvgIcon3 className="svg-container2-nav" />
            </div>
          </div>
          <div
            className="vertical-number-container-nav"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/bag")}
          >
            <span className="badge-with-icon-nav">2</span>
            <div className="vertical-center-with-icon-nav">
              <SvgIcon4 className="svg-container2-nav" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DynamicContentDisplay;
