import { useNavigate } from "react-router-dom";
import ProductNavigation from "./ProductNavigation";
import "./style.css";
import { useEffect, useState } from "react";
import { api } from "../../../config/api";
import { TailSpin } from "react-loader-spinner";

import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { toast } from "sonner";
import { useDebounce } from "../BigScreen/useDebounce";
import SvgIcon1 from "./DynamicContentDisplay/icons/SvgIcon1";

function Navbar(props) {
  const navigate = useNavigate();
  const [showcall, setShowcall] = useState(false);
  const [showprod, setShowprod] = useState(false);
  const [categs, setCategs] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [products, setProducts] = useState([]);
  const [categ, setCateg] = useState("best_selling");
  const [open, setOpen] = useState(false);

  const [inputState, setInputState] = useState("");

  const debouncedValue2 = useDebounce(inputState, 500);

  useEffect(() => {
    if (debouncedValue2) {
      navigate(`/products/${debouncedValue2}`);
    }
  }, [debouncedValue2]);

  let debouncedValue = useDebounce(categ, 300);

  const getCategories = async () => {
    try {
      setLoading(true);
      const response = await api.get("/categories/");
      if (response.status === 200) {
        setCategs(response.data.results);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
    }
  };

  const getProducts = async () => {
    try {
      setLoading2(true);
      const response = await api.get(
        `/fabrics/${
          debouncedValue
            ? "?keyword=" + debouncedValue
            : "?keyword=best_selling"
        }`
      );
      console.log(response);
      if (response.status === 200) {
        setProducts(response.data.results.slice(0, 6));
        setLoading2(false);
      }
    } catch (e) {
      setLoading2(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [debouncedValue]);
  useEffect(() => {
    getCategories();
  }, []);

  const changeShowcall = () => {
    setShowcall(!showcall);
  };
  const changeshowprod = () => {
    setShowprod(!showprod);
  };
  return (
    <nav
      className={
        props.events
          ? "main-content-container-nav eventsnavbar"
          : "main-content-container-nav"
      }
    >
      <div className="header-navbar-nav">
        <div className="logodiv">
          <div className="logoinner">
            <MenuIcon
              className="menu-icon-nav2"
              onClick={() => setOpen(true)}
              style={
                open
                  ? {
                      opacity: 0,
                    }
                  : {}
              }
            />

            <img
              src="https://d2e8m995jm0i5z.cloudfront.net/websiteimages/logo.webp"
              className="product-image-styles-nav"
              alt="logo"
              style={{ cursor: "pointer", zIndex: 3 }}
              onClick={() => navigate("/")}
            />
          </div>
          <div className="callout-container-nav navsearchbar">
            <SvgIcon1 className="svg-container1-nav searchbarsvg" />
            <input
              placeholder="Search"
              type="text"
              className="searchbar"
              onChange={(e) => {
                if (e.target.value === "") {
                  navigate(`/products`);
                }
                setInputState(e.target.value);
              }}
              value={inputState}
            />
          </div>
        </div>
        <ProductNavigation
          changeShowcall={changeShowcall}
          changeshowprod={changeshowprod}
          showprod={showprod}
          refresh={props.refresh}
          open={open}
          setOpen={setOpen}
        />
      </div>
      <div
        className={showcall ? "contactScreen" : "contactScreen opacityzero"}
        onClick={changeShowcall}
      >
        <div
          className="contacttext"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="maintoptext">
            <h1>Contact Us</h1>
            <p>We are just one message away !</p>
            <div className="closeicon" onClick={changeShowcall}>
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
          </div>
          <div className="calldetailsdiv">
            <div className="singlecalldetail">
              <svg
                width="16"
                height="24"
                viewBox="0 0 16 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.80078 16.8C6.48252 16.8 6.1773 16.9264 5.95225 17.1515C5.72721 17.3765 5.60078 17.6817 5.60078 18C5.60078 18.3183 5.72721 18.6235 5.95225 18.8485C6.1773 19.0736 6.48252 19.2 6.80078 19.2H9.20078C9.51904 19.2 9.82426 19.0736 10.0493 18.8485C10.2744 18.6235 10.4008 18.3183 10.4008 18C10.4008 17.6817 10.2744 17.3765 10.0493 17.1515C9.82426 16.9264 9.51904 16.8 9.20078 16.8H6.80078ZM4.40078 0C3.446 0 2.53033 0.379285 1.8552 1.05442C1.18007 1.72955 0.800781 2.64522 0.800781 3.6V20.4C0.800781 21.3548 1.18007 22.2705 1.8552 22.9456C2.53033 23.6207 3.446 24 4.40078 24H11.6008C12.5556 24 13.4712 23.6207 14.1464 22.9456C14.8215 22.2705 15.2008 21.3548 15.2008 20.4V3.6C15.2008 2.64522 14.8215 1.72955 14.1464 1.05442C13.4712 0.379285 12.5556 0 11.6008 0H4.40078ZM3.20078 3.6C3.20078 3.28174 3.32721 2.97652 3.55225 2.75147C3.7773 2.52643 4.08252 2.4 4.40078 2.4H11.6008C11.919 2.4 12.2243 2.52643 12.4493 2.75147C12.6744 2.97652 12.8008 3.28174 12.8008 3.6V20.4C12.8008 20.7183 12.6744 21.0235 12.4493 21.2485C12.2243 21.4736 11.919 21.6 11.6008 21.6H4.40078C4.08252 21.6 3.7773 21.4736 3.55225 21.2485C3.32721 21.0235 3.20078 20.7183 3.20078 20.4V3.6Z"
                  fill="black"
                />
              </svg>
              <p>
                <a
                  href={`tel:${localStorage.getItem("phone")}`}
                  onClick={() => {
                    navigator.clipboard.writeText(
                      localStorage.getItem("phone")
                    );
                    toast.success("Phone number copied to clipboard");
                  }}
                >
                  Phone Call
                </a>{" "}
              </p>
            </div>
            <div className="singlecalldetail">
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 2.5C24 1.125 22.92 0 21.6 0H2.4C1.08 0 0 1.125 0 2.5V17.5C0 18.875 1.08 20 2.4 20H21.6C22.92 20 24 18.875 24 17.5V2.5ZM21.6 2.5L12 8.75L2.4 2.5H21.6ZM21.6 17.5H2.4V5L12 11.25L21.6 5V17.5Z"
                  fill="black"
                />
              </svg>
              {/* // whatsapp, postal_code, phone, longitude, line, latitude,
              instagram, facebook, email, country, address */}
              <a href={`mailto:${localStorage.getItem("email")}`}>Email</a>{" "}
            </div>
            <div className="singlecalldetail">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C18.6276 0 24 5.3724 24 12C24 18.6276 18.6276 24 12 24C9.95755 24.003 7.94842 23.4824 6.16441 22.488L5.79841 22.2744L2.16001 23.3448C1.96201 23.4031 1.7524 23.4099 1.55103 23.3646C1.34966 23.3192 1.16322 23.2232 1.00937 23.0855C0.85553 22.9479 0.739382 22.7733 0.671942 22.5782C0.604501 22.3831 0.588003 22.174 0.62401 21.9708L0.65521 21.84L1.72561 18.2016C0.593961 16.3312 -0.00289685 14.1861 1.05714e-05 12C1.05714e-05 5.3724 5.37241 0 12 0ZM12 2.4C10.2812 2.39969 8.59375 2.86087 7.114 3.73538C5.63425 4.60989 4.41643 5.86565 3.58772 7.37153C2.75901 8.8774 2.34981 10.5782 2.40284 12.2962C2.45587 14.0142 2.9692 15.6865 3.88921 17.1384C4.12681 17.5128 4.22881 17.9736 4.14841 18.4308L4.10161 18.6264L3.57241 20.4276L5.37361 19.8984C5.89321 19.7448 6.43321 19.8384 6.86161 20.1108C8.1196 20.9073 9.54563 21.4003 11.027 21.5508C12.5083 21.7013 14.0044 21.5052 15.3969 20.9779C16.7893 20.4506 18.0401 19.6067 19.0502 18.5127C20.0603 17.4188 20.8022 16.1049 21.2171 14.6749C21.6319 13.2449 21.7085 11.738 21.4407 10.2733C21.1729 8.80863 20.568 7.42632 19.674 6.23565C18.7799 5.04498 17.6212 4.0786 16.2893 3.4129C14.9574 2.74719 13.489 2.40042 12 2.4ZM8.52241 6.2208C8.65526 6.16326 8.80081 6.14131 8.94473 6.15709C9.08864 6.17287 9.22597 6.22584 9.34321 6.3108C9.94801 6.7524 10.428 7.3452 10.8408 7.9236L11.2332 8.49239L11.4168 8.76239C11.5227 8.91729 11.5747 9.10275 11.5648 9.29014C11.5548 9.47753 11.4834 9.65642 11.3616 9.7992L11.2716 9.89039L10.1628 10.7136C10.1094 10.7522 10.0719 10.8089 10.0571 10.8731C10.0423 10.9373 10.0513 11.0047 10.0824 11.0628C10.3344 11.5188 10.7796 12.1992 11.2908 12.7104C11.8032 13.2216 12.5148 13.6968 13.002 13.9764C13.1076 14.0364 13.2348 14.0172 13.3212 13.9392L13.3668 13.8852L14.088 12.7872C14.2204 12.6108 14.4159 12.4926 14.6336 12.4572C14.8513 12.4219 15.0742 12.4722 15.2556 12.5976L15.9072 13.0524C16.5552 13.5144 17.178 14.0112 17.6712 14.6412C17.7629 14.7594 17.8212 14.9 17.84 15.0484C17.8588 15.1968 17.8374 15.3475 17.778 15.4848C17.3028 16.5936 16.0992 17.538 14.8488 17.4924L14.658 17.4804L14.4288 17.4588C14.3855 17.4537 14.3423 17.4481 14.2992 17.442L14.0136 17.394C12.9048 17.1852 11.1276 16.5564 9.28561 14.7156C7.44481 12.8736 6.81601 11.0964 6.60721 9.98759L6.55921 9.70199L6.52921 9.45239L6.51361 9.24239C6.51171 9.21241 6.51011 9.18241 6.50881 9.15239C6.46321 7.8996 7.41241 6.696 8.52241 6.2208Z"
                  fill="black"
                />
              </svg>

              <p
                onClick={() => {
                  window.open(localStorage.getItem("whatsapp"), "_blank");
                }}
              >
                Whatsapp
              </p>
            </div>
            <div className="singlecalldetail">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 0C5.50512 0 0 4.501 0 10.3256C0 16.1502 5.50512 20.6512 12 20.6512H12.0008C12.4725 20.6507 12.9374 20.6279 13.3953 20.5825V23.1628C13.3953 23.4998 13.5974 23.8039 13.9081 23.9346C14.2187 24.0652 14.5774 23.9968 14.8183 23.761C16.6824 21.9359 19.8737 18.7072 21.8693 16.204C23.2045 14.5463 24 12.5208 24 10.3256C24 4.501 18.4949 0 12 0ZM1.67442 10.3256C1.67442 5.67053 6.16446 1.67442 12 1.67442C17.8355 1.67442 22.3256 5.67053 22.3256 10.3256C22.3256 12.1035 21.6838 13.7656 20.5641 15.155L20.5613 15.1585C19.0699 17.0296 16.8575 19.3519 15.0698 21.1517V19.6242C15.0698 19.377 14.9605 19.1425 14.7714 18.9834C14.5822 18.8243 14.3324 18.757 14.0889 18.7994C13.4163 18.9166 12.72 18.976 11.9992 18.9767C6.16404 18.9764 1.67442 14.9804 1.67442 10.3256ZM11.7133 7.66229C11.5196 7.3396 11.1345 7.18575 10.7719 7.2862C10.4092 7.38665 10.1581 7.71672 10.1581 8.09303V12.5581C10.1581 13.0205 10.533 13.3954 10.9953 13.3954C11.4577 13.3954 11.8326 13.0205 11.8326 12.5581V11.1156L12.9565 12.9889C13.1501 13.3116 13.5352 13.4654 13.8979 13.365C14.2606 13.2645 14.5116 12.9345 14.5116 12.5581V8.09303C14.5116 7.63065 14.1368 7.25582 13.6744 7.25582C13.212 7.25582 12.8372 7.63065 12.8372 8.09303V9.53555L11.7133 7.66229ZM6.13953 8.09303C6.13953 7.63065 5.7647 7.25582 5.30233 7.25582C4.83995 7.25582 4.46512 7.63065 4.46512 8.09303V12.5581C4.46512 13.0205 4.83995 13.3954 5.30233 13.3954H6.4186C6.88098 13.3954 7.25581 13.0205 7.25581 12.5581C7.25581 12.0958 6.88098 11.7209 6.4186 11.7209H6.13953V8.09303ZM9.48837 8.09303C9.48837 7.63065 9.11354 7.25582 8.65116 7.25582C8.18879 7.25582 7.81395 7.63065 7.81395 8.09303V12.5581C7.81395 13.0205 8.18879 13.3954 8.65116 13.3954C9.11354 13.3954 9.48837 13.0205 9.48837 12.5581V8.09303ZM16.0186 7.25582C15.5562 7.25582 15.1814 7.63065 15.1814 8.09303V12.5581C15.1814 13.0205 15.5562 13.3954 16.0186 13.3954H18.1395C18.6019 13.3954 18.9767 13.0205 18.9767 12.5581C18.9767 12.0958 18.6019 11.7209 18.1395 11.7209H16.8558V11.1628H17.626C18.0884 11.1628 18.4633 10.788 18.4633 10.3256C18.4633 9.86321 18.0884 9.48838 17.626 9.48838H16.8558V8.93024H18.1395C18.6019 8.93024 18.9767 8.55541 18.9767 8.09303C18.9767 7.63065 18.6019 7.25582 18.1395 7.25582H16.0186Z"
                  fill="black"
                />
              </svg>

              <p
                onClick={() => {
                  window.open(localStorage.getItem("line"), "_blank");
                }}
              >
                {" "}
                Line
              </p>
            </div>
            <p
              style={{
                cursor: "pointer",
                textDecoration: "underline 2px solid black",
              }}
              onClick={() => {
                navigate("/contact/general");
                setShowcall(false);
              }}
              className="needhelp"
            >
              Need help ?
            </p>
          </div>
        </div>
      </div>
      <div
        className={
          !showprod ? "productsdivinnavbar noheight" : "productsdivinnavbar"
        }
        onMouseLeave={() => {
          if (window.innerWidth > 850) {
            setShowprod(false);
          }
        }}
        onMouseEnter={() => {
          if (window.innerWidth > 850) {
            setShowprod(true);
          }
        }}
      >
        <div className="productsoptionsdivinnav">
          <div className="closeicon2">
            <div className="clodeiconiner" onClick={() => setShowprod(false)}>
              <svg
                width="25"
                height="25"
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
          </div>
          {loading ? (
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TailSpin
                visible={true}
                height="60"
                width="60"
                color="#000"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          ) : (
            <>
              <div
                className="productsoptiondivinnav"
                onClick={() => {
                  navigate("/products");
                  setShowprod(false);
                }}
              >
                <div className="textdivinnavproductdropdown">
                  <h1>View All</h1>
                </div>
                <div className="iconinproductnavdropdown">
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.39778 6.86744C7.61746 7.08711 7.61746 7.44321 7.39778 7.66289L1.66291 13.3977C1.44323 13.6174 1.08713 13.6174 0.867456 13.3977L0.602256 13.1326C0.382581 12.9129 0.382581 12.5568 0.602256 12.3371L5.67421 7.26516L0.602256 2.19321C0.382581 1.97354 0.382581 1.61744 0.602256 1.39776L0.867456 1.13256C1.08713 0.912889 1.44323 0.912889 1.66291 1.13256L7.39778 6.86744Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
              <div
                className="productsoptiondivinnav"
                onClick={() => {
                  navigate(
                    "/products/Best Selling/ All of Corlee's best seling products."
                  );
                  setShowprod(false);
                }}
                onMouseEnter={() => {
                  if (window.innerWidth > 750) {
                    setCateg("best_selling");
                  }
                }}
              >
                <div className="textdivinnavproductdropdown">
                  <h1>Best Selling</h1>
                  <p>Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
                <div
                  className="iconinproductnavdropdown"
                  onClick={(e) => {
                    e.stopPropagation();

                    setCateg("best_selling");
                  }}
                >
                  🔥
                </div>
              </div>
              {categs &&
                categs.map((categ, index) => (
                  <div
                    className="productsoptiondivinnav"
                    key={index}
                    onClick={() => {
                      navigate(`/products/${categ.name}/${categ.description}`);
                      setShowprod(false);
                    }}
                    onMouseEnter={() => {
                      if (window.innerWidth > 750) {
                        setCateg(categ.name);
                      }
                    }}
                  >
                    <div className="textdivinnavproductdropdown">
                      <h1>{categ.name}</h1>
                      <p>{categ.description}</p>
                    </div>
                    <div
                      className="iconinproductnavdropdown"
                      onClick={(e) => {
                        e.stopPropagation();

                        setCateg(categ.name);
                      }}
                    >
                      <svg
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.39778 6.86744C7.61746 7.08711 7.61746 7.44321 7.39778 7.66289L1.66291 13.3977C1.44323 13.6174 1.08713 13.6174 0.867456 13.3977L0.602256 13.1326C0.382581 12.9129 0.382581 12.5568 0.602256 12.3371L5.67421 7.26516L0.602256 2.19321C0.382581 1.97354 0.382581 1.61744 0.602256 1.39776L0.867456 1.13256C1.08713 0.912889 1.44323 0.912889 1.66291 1.13256L7.39778 6.86744Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
        <div className="verticallineinnavdropdownofproducts"></div>
        <div className="relatedproductsdivinnav">
          {loading2 ? (
            <h2
              style={{
                textAlign: "center",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TailSpin
                visible={true}
                height="60"
                width="60"
                color="#000"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </h2>
          ) : (
            <>
              {products &&
                products.map((product, index) => (
                  <div
                    className="relatedproductdivinnav"
                    key={index}
                    onClick={() => {
                      navigate(`/product/${product.id}/`);
                      setShowprod(false);
                    }}
                  >
                    <div
                      className="imagedivinproductdropdown"
                      style={{
                        backgroundImage: `url(${product.color_images[0].primary_image_url})`,
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div className="textdropdowninnav">{product.finish}</div>
                  </div>
                ))}
              {products.length < 6 &&
                [1, 2, 3, 4, 5, 6].slice(products.length).map((index) => (
                  <div className="relatedproductdivinnav" key={index}>
                    <div
                      className="imagedivinproductdropdown"
                      style={{
                        backgroundColor: "rgb(0,0,0, 0.1)",
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div className="textdropdowninnav">Empty</div>
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
