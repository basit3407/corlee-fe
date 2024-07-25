import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import SvgIcon4 from "./icons/SvgIcon4";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import "./style.css";
import messages from "./messages.json";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../../config/api";

function DynamicContentDisplay(props) {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const getcartcount = async () => {
    try {
      const response = await api.get("/cart-items/");
      setCount(response.data.cart_items.length);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getcartcount();
  }, [props.refresh]);

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
            onClick={() => navigate("/user/favourites")}
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
            onClick={() => navigate("/user/bag")}
          >
            {count ? (
              <span className="badge-with-icon-nav">{count}</span>
            ) : (
              <></>
            )}
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
