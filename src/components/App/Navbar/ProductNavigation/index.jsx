import DynamicContentDisplay from "../DynamicContentDisplay";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import messages from "./messages.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SvgIcon3 from "../DynamicContentDisplay/icons/SvgIcon3";

function ProductNavigation(props) {
  const navigate = useNavigate();
  const { open, setOpen } = props;

  const [show, setShow] = useState(false);
  return (
    <>
      {open ? (
        <>
          <ClearIcon
            className="menu-icon-nav2"
            onClick={() => setOpen(false)}
            style={
              open
                ? {
                    position: "fixed",
                    top: "40px",
                    right: "30px",
                    zIndex: 40000,
                  }
                : {}
            }
          />
        </>
      ) : (
        <div
          className="card-container-nav circlemust menu-icon-nav2 otheraccount"
          style={{ cursor: "pointer" }}
          onClick={() => {
            localStorage.getItem("token")
              ? setShow((prev) => !prev)
              : navigate("/login");
          }}
        >
          <div
            className="circular-text-container-nav blacknavbar navsearchbar"
            style={
              show
                ? {
                    border: "2px solid #909090",
                  }
                : null
            }
          >
            {!localStorage.getItem("token") ? (
              <SvgIcon3 className="svg-container2-nav" />
            ) : (
              <h1>
                {localStorage.getItem("NameLetter") ? (
                  localStorage.getItem("NameLetter").toUpperCase()
                ) : (
                  <SvgIcon3 className="svg-container2-nav" />
                )}
              </h1>
            )}
          </div>
          {show && (
            <div className="dropdowndiv">
              <p onClick={() => navigate("/user/history")}>History</p>
              <p onClick={() => navigate("/user/favourites")}>Favourites</p>
              <p
                onClick={() => {
                  window.location.reload();
                  localStorage.clear();
                  setAuthToken(null);
                }}
              >
                Logout
              </p>
            </div>
          )}
        </div>
      )}
      <div
        className={
          open
            ? "main-navigation-container-nav"
            : "main-navigation-container-nav hidden"
        }
      >
        <div className="horizontal-menu-with-icons-nav">
          <div
            className="product-card-container-nav"
            onMouseEnter={() => {
              if (window.innerWidth > 850) {
                props.changeshowprod();
                setOpen(false);
              }
            }}
            onMouseLeave={() => {
              if (window.innerWidth > 850) {
                props.changeshowprod();
                setOpen(false);
              }
            }}
            onClick={() => {
              props.changeshowprod();
              setOpen(false);
            }}
            style={{ cursor: "pointer" }}
          >
            <p className="contact-info-text-style-nav notolive">
              {messages["products"]}
            </p>
            <SvgIcon1 className="svg-container-nav" showprod={props.showprod} />
          </div>
          <p
            className="contact-info-text-style-nav"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/events")}
          >
            {messages["events"]}
          </p>
          <p
            className="contact-info-text-style-nav"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/blogs")}
          >
            {messages["Blogs"]}
          </p>
          <p
            className="contact-info-text-style-nav"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/about")}
          >
            {messages["about_us"]}
          </p>
        </div>
        <DynamicContentDisplay
          refresh={props.refresh}
          {...props}
          show={show}
          setShow={setShow}
        />
      </div>
    </>
  );
}

export default ProductNavigation;
