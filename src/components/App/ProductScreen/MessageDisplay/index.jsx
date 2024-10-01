import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { api } from "../../../../config/api";

function MessageDisplay(props) {
  const [showfilter, setShowfilter] = useState(false);
  const [showsort, setShowsort] = useState(false);
  const [showcolors, setShowcolors] = useState(false);
  const [loading, setLoading] = useState(true);
  const [colors, setColors] = useState([]);
  const [localcolor, setlocalcolor] = useState([]);

  const togglename = (colorname) => {
    if (localcolor.includes(colorname)) {
      setlocalcolor(localcolor.filter((e) => e !== colorname));
    } else {
      setlocalcolor([...localcolor, colorname]);
    }
  };
  const [localsort, setLocalsort] = useState("");
  useEffect(() => {
    setLocalsort(props.sort);
    setlocalcolor(props.color);
  }, [props.color, props.sort]);

  const loadColors = async () => {
    try {
      const res = await api.get("/color-categories/");
      console.log("colors: ", res);
      if (res.status === 200) {
        setColors(res.data);
        setLoading(false);
      }
    } catch (e) {
      toast.error("Sometning went wong while fetching colors.");
    }
  };
  useEffect(() => {
    loadColors();
  }, []);

  return (
    <div className="material-section">
      <p className="material-heading-text-style">
        {props.fav
          ? "Favourites"
          : props.searchterm
          ? "Search products"
          : props.name
          ? props.name
          : "All Products"}
      </p>
      <p className="material-description-text-style">
        {props.fav
          ? "lorem ipsum dolor sit amet"
          : props.searchterm
          ? "Products matching your search : " + props.searchterm
          : props.desc}
      </p>
      <button
        className="material-button"
        onClick={() => setShowfilter(!showfilter)}
      >
        <SvgIcon1 className="svg-container4" />
        {messages["filter"]}
      </button>
      <div
        className={
          showfilter ? "filtertab pacityfull" : "filtertab opacityzero"
        }
        onClick={() => setShowfilter(!showfilter)}
      >
        <div className="filterpage" onClick={(e) => e.stopPropagation()}>
          <div
            className="closeicon closeicontwo"
            onClick={() => setShowfilter(!showfilter)}
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
          <h1>Filter Items</h1>
          <div className="sortbydiv">
            <div
              className="maintopvisiblediv"
              onClick={() => setShowsort(!showsort)}
            >
              <p>Sort by</p>
              <svg
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={
                  showsort
                    ? { transform: "rotate(180deg)" }
                    : { transform: "rotate(0deg)" }
                }
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.13256 7.89778C6.91289 8.11746 6.55679 8.11746 6.33711 7.89778L0.602251 2.16291C0.382583 1.94323 0.382583 1.58713 0.602251 1.36746L0.867421 1.10226C1.08709 0.882581 1.44324 0.882581 1.66292 1.10226L6.73484 6.17421L11.8068 1.10226C12.0265 0.882582 12.3826 0.882582 12.6022 1.10226L12.8674 1.36746C13.0871 1.58713 13.0871 1.94323 12.8674 2.16291L7.13256 7.89778Z"
                  fill="black"
                />
              </svg>
            </div>
            <div
              className={
                showsort ? "dropdownitems height150px " : "dropdownitems"
              }
            >
              <p
                onClick={() => {
                  localsort === "newest"
                    ? setLocalsort("")
                    : setLocalsort("newest");
                }}
                style={
                  localsort === "newest"
                    ? { fontWeight: "600", fontSize: "17px" }
                    : null
                }
              >
                Newest
              </p>
              <p
                onClick={() => {
                  localsort === "oldest"
                    ? setLocalsort("")
                    : setLocalsort("oldest");
                }}
                style={
                  localsort === "oldest"
                    ? { fontWeight: "600", fontSize: "17px" }
                    : null
                }
              >
                Oldest
              </p>
              <p
                onClick={() => {
                  localsort === "most_requested"
                    ? setLocalsort("")
                    : setLocalsort("most_requested");
                }}
                style={
                  localsort === "most_requested"
                    ? { fontWeight: "600", fontSize: "17px" }
                    : null
                }
              >
                Most Requested
              </p>
            </div>
          </div>
          <div className="coorsoptionsdiv">
            <div
              className="maintopvisiblediv"
              onClick={() => {
                setShowcolors((prev) => !prev);
              }}
            >
              <p>Colors</p>
              <svg
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={
                  showcolors
                    ? { transform: "rotate(180deg)" }
                    : { transform: "none" }
                }
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.13256 7.89778C6.91289 8.11746 6.55679 8.11746 6.33711 7.89778L0.602251 2.16291C0.382583 1.94323 0.382583 1.58713 0.602251 1.36746L0.867421 1.10226C1.08709 0.882581 1.44324 0.882581 1.66292 1.10226L6.73484 6.17421L11.8068 1.10226C12.0265 0.882582 12.3826 0.882582 12.6022 1.10226L12.8674 1.36746C13.0871 1.58713 13.0871 1.94323 12.8674 2.16291L7.13256 7.89778Z"
                  fill="black"
                />
              </svg>
            </div>
            <div
              className="colordropdownitems"
              style={
                showcolors ? { height: `${60 * (colors.length / 2)}px` } : {}
              }
            >
              {colors.map((color, index) => (
                <div
                  style={
                    localcolor.includes(color.id)
                      ? { border: "2px solid rgba(0, 0, 0, 0.392)" }
                      : {}
                  }
                  key={index}
                  onClick={() => togglename(color.id)}
                >
                  <p>{color.display_name}</p>
                  <div style={{ backgroundColor: color.color }}></div>
                </div>
              ))}
            </div>
          </div>
          <div className="buttonsinfiltersidebar">
            <button
              onClick={() => {
                props.setcolor(localcolor);
                props.setSort(localsort);
                props.setPage(1);
                setShowfilter(!showfilter);
              }}
            >
              Apply
            </button>
            <button
              onClick={() => {
                props.setcolor([]);
                props.setSort("");
                setLocalsort("");
                setlocalcolor([]);
                props.setPage(1);
                setShowfilter(!showfilter);
              }}
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageDisplay;
