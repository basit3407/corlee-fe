import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";
import { useEffect, useState } from "react";

function MessageDisplay(props) {
  const [showfilter, setShowfilter] = useState(false);
  const [showsort, setShowsort] = useState(false);
  const [showcolors, setShowcolors] = useState(false);
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
        {props.searchterm
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
                  localsort === "mostrequested"
                    ? setLocalsort("")
                    : setLocalsort("mostrequested");
                }}
                style={
                  localsort === "mostrequested"
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
              className={
                showcolors
                  ? "colordropdownitems height240px"
                  : "colordropdownitems"
              }
            >
              <div
                style={
                  localcolor.includes("red")
                    ? { border: "2px solid rgba(0, 0, 0, 0.392)" }
                    : {}
                }
                onClick={() => togglename("red")}
              >
                <p>Red</p>
                <div className="colorcircleofred"></div>
              </div>
              <div
                onClick={() => togglename("blue")}
                style={
                  localcolor.includes("blue")
                    ? {
                        border: "2px solid rgba(0, 0, 0, 0.392)",
                      }
                    : {}
                }
              >
                <p>Blue</p>
                <div className="colorcircleofblue"></div>
              </div>
              <div
                onClick={() => togglename("green")}
                style={
                  localcolor.includes("green")
                    ? {
                        border: "2px solid rgba(0, 0, 0, 0.392)",
                      }
                    : {}
                }
              >
                <p>Green</p>
                <div className="colorcircleofgreen"></div>
              </div>
              <div
                onClick={() => togglename("black")}
                style={
                  localcolor.includes("black")
                    ? {
                        border: "2px solid rgba(0, 0, 0, 0.392)",
                      }
                    : {}
                }
              >
                <p>Black</p>
                <div className="colorcircleofblack"></div>
              </div>
              <div
                onClick={() => togglename("white")}
                style={
                  localcolor.includes("white")
                    ? {
                        border: "2px solid rgba(0, 0, 0, 0.392)",
                      }
                    : {}
                }
              >
                <p>White</p>
                <div className="colorcircleofwhite"></div>
              </div>
              <div
                onClick={() => togglename("purple")}
                style={
                  localcolor.includes("purple")
                    ? {
                        border: "2px solid rgba(0, 0, 0, 0.392)",
                      }
                    : {}
                }
              >
                <p>Purple</p>
                <div className="colorcircleofpurple"></div>
              </div>
              <div
                onClick={() => togglename("orange")}
                style={
                  localcolor.includes("orange")
                    ? {
                        border: "2px solid rgba(0, 0, 0, 0.392)",
                      }
                    : {}
                }
              >
                <p>Orange</p>
                <div className="colorcircleoforange"></div>
              </div>
              <div
                onClick={() => togglename("pink")}
                style={
                  localcolor.includes("pink")
                    ? {
                        border: "2px solid rgba(0, 0, 0, 0.392)",
                      }
                    : {}
                }
              >
                <p>Pink</p>
                <div className="colorcircleofpink"></div>
              </div>
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
