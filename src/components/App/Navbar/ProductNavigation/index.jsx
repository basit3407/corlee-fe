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
          <div
            className="clearicon"
            onClick={() => setOpen(false)}
            style={
              open
                ? {
                    position: "fixed",
                    top: "40px",
                    right: "30px",
                    zIndex: 40000,
                    border: "2px solid gray",
                    height: "25px",

                    width: "25px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "1000px",
                  }
                : {}
            }
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5203 0.784875C11.4414 0.705828 11.3477 0.643114 11.2446 0.600324C11.1414 0.557535 11.0308 0.535509 10.9192 0.535509C10.8075 0.535509 10.6969 0.557535 10.5938 0.600324C10.4906 0.643114 10.3969 0.705828 10.318 0.784875L6.14833 4.94603L1.97865 0.776348C1.89971 0.697404 1.80599 0.634782 1.70284 0.592058C1.59969 0.549333 1.48914 0.527344 1.3775 0.527344C1.26586 0.527344 1.1553 0.549333 1.05216 0.592058C0.949013 0.634782 0.855293 0.697404 0.776348 0.776348C0.697404 0.855293 0.634782 0.949013 0.592058 1.05216C0.549333 1.1553 0.527344 1.26586 0.527344 1.3775C0.527344 1.48914 0.549333 1.59969 0.592058 1.70284C0.634782 1.80599 0.697404 1.89971 0.776348 1.97865L4.94603 6.14833L0.776348 10.318C0.697404 10.397 0.634782 10.4907 0.592058 10.5938C0.549333 10.697 0.527344 10.8075 0.527344 10.9192C0.527344 11.0308 0.549333 11.1414 0.592058 11.2445C0.634782 11.3477 0.697404 11.4414 0.776348 11.5203C0.855293 11.5993 0.949013 11.6619 1.05216 11.7046C1.1553 11.7473 1.26586 11.7693 1.3775 11.7693C1.48914 11.7693 1.59969 11.7473 1.70284 11.7046C1.80599 11.6619 1.89971 11.5993 1.97865 11.5203L6.14833 7.35063L10.318 11.5203C10.397 11.5993 10.4907 11.6619 10.5938 11.7046C10.697 11.7473 10.8075 11.7693 10.9192 11.7693C11.0308 11.7693 11.1414 11.7473 11.2445 11.7046C11.3477 11.6619 11.4414 11.5993 11.5203 11.5203C11.5993 11.4414 11.6619 11.3477 11.7046 11.2445C11.7473 11.1414 11.7693 11.0308 11.7693 10.9192C11.7693 10.8075 11.7473 10.697 11.7046 10.5938C11.6619 10.4907 11.5993 10.397 11.5203 10.318L7.35063 6.14833L11.5203 1.97865C11.8443 1.65463 11.8443 1.1089 11.5203 0.784875Z"
                fill="#666666"
              />
            </svg>
          </div>
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
              {document.body.scrollWidth < 950 && (
                <p onClick={() => navigate("/user/bag")}>Bag</p>
              )}
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
