import DynamicContentDisplay from "../DynamicContentDisplay";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import messages from "./messages.json";
import { useState } from "react";

function ProductNavigation() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open ? (
        <ClearIcon
          className="menu-icon-nav2"
          onClick={() => setOpen(false)}
          style={
            open
              ? {
                  position: "fixed",
                  top: "40px",
                  right: "30px",
                }
              : {}
          }
        />
      ) : (
        <MenuIcon
          className="menu-icon-nav2"
          onClick={() => setOpen(true)}
          style={
            open
              ? {
                  position: "fixed",
                  top: "40px",
                  right: "30px",
                }
              : {}
          }
        />
      )}
      <div
        className={
          open
            ? "main-navigation-container-nav"
            : "main-navigation-container-nav hidden"
        }
      >
        <div className="horizontal-menu-with-icons-nav">
          <div className="product-card-container-nav">
            <p className="contact-info-text-style-nav">
              {messages["products"]}
            </p>
            <SvgIcon1 className="svg-container-nav" />
          </div>
          <p className="contact-info-text-style-nav">{messages["events"]}</p>
          <p className="contact-info-text-style-nav">{messages["Blogs"]}</p>
          <p className="contact-info-text-style-nav">{messages["about_us"]}</p>
        </div>
        <DynamicContentDisplay />
      </div>
    </>
  );
}

export default ProductNavigation;
