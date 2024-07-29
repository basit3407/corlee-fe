import ContentRenderer from "../ContentRenderer";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import SvgIcon4 from "./icons/SvgIcon4";
import SvgIcon5 from "./icons/SvgIcon5";
import "./style.css";
import { TailSpin } from "react-loader-spinner";
import messages from "./messages.json";
import { useEffect, useState } from "react";
import { api } from "../../../../config/api";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useDebounce } from "../../BigScreen/useDebounce";

function ContentDisplayWidgetGenerator() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [localsort, setLocalsort] = useState("");
  const [showcat, setShowcat] = useState(false);
  const [localcateg, setLocalcateg] = useState([]);
  const [noBlogs, setNoBlogs] = useState(false);
  const [showsort, setShowsort] = useState(false);
  const [showfilter, setShowfilter] = useState(false);
  const [page, setPage] = useState(1);
  const [categs, setCategs] = useState([]);
  const [loading3, setLoading3] = useState(false);
  const [searchterm, setSearchterm] = useState("");

  const navigate = useNavigate();

  let debouncedValue = useDebounce(searchterm, 500);
  const loadBlogs = async (param) => {
    try {
      setLoading(true);
      setPage(1);
      let response = await api.get(
        `/blogs/?${searchterm ? `search=${searchterm}` : ""}${
          localsort && param !== "nosort"
            ? `&ordering=${
                localsort === "newest"
                  ? "-created_at"
                  : localsort === "oldest"
                  ? "created_at"
                  : "-view_count"
              }`
            : ""
        }${
          localcateg.length > 0
            ? `&category=${localcateg
                .filter((item) => item !== param)
                .join(",")}`
            : ""
        }&page=${page}`
      );
      if (response.status === 200) {
        if (response.data.results.length > 0) {
          setBlogs(response.data.results);
          setLoading(false);
          setNoBlogs(false);
        } else {
          setNoBlogs(true);
          setLoading(false);
        }
      } else {
        toast.error("Something went wrong !");
        navigate("/");
        setLoading(false);
      }
    } catch (e) {
      if (e.response.data.detail === "Invalid page.") {
        setNoBlogs(true);
        setLoading(false);
      } else {
        toast.error("Something went wrong !");
        setLoading(false);
        navigate("/");
      }
    }
  };
  const loadNextPage = async () => {
    try {
      if (page === 1) return;

      setLoading3(true);
      let response = await api.get(
        `/blogs/?${searchterm ? `search=${searchterm}` : ""}${
          localsort
            ? `&ordering=${
                localsort === "newest"
                  ? "-created_at"
                  : localsort === "oldest"
                  ? "created_at"
                  : "-view_count"
              }`
            : ""
        }${
          localcateg.length > 0 ? `&category=${localcateg.join(",")}` : ""
        }&page=${page}`
      );
      if (response.status === 200) {
        if (response.data.results.length > 0) {
          setBlogs((prev) => [...prev, response.data.results]);
          setLoading3(false);
        } else {
          toast.error("No more blogs");
          setLoading3(false);
        }
      } else {
        toast.error("Something went wrong !");
        navigate("/");
        setLoading3(false);
      }
    } catch (e) {
      if (e.response.data.detail === "Invalid page.") {
        toast.error("No more blogs");
        setLoading3(false);
      } else {
        toast.error("Something went wrong !");
        setLoading3(false);
        navigate("/");
      }
    }
  };

  const loadCategs = async () => {
    try {
      if (categs.length > 0) return;
      setLoading2(true);
      let response = await api.get("/blog-categories/");
      if (response.status === 200) {
        setCategs(response.data);
        setLoading2(false);
      } else {
        toast.error("Something went wrong !");
        navigate("/");
        setLoading2(false);
      }
    } catch (e) {
      toast.error("Something went wrong !");
      setLoading2(false);
      navigate("/");
    }
  };
  useEffect(() => {
    loadBlogs();
  }, [debouncedValue]);
  useEffect(() => {
    loadNextPage();
  }, [page]);

  const togglecateg = (categ) => {
    if (localcateg.includes(categ)) {
      setLocalcateg(localcateg.filter((item) => item !== categ));
    } else {
      setLocalcateg([...localcateg, categ]);
    }
  };
  return (
    <div className="blog-post-container-blogs">
      <p className="hero-title-text-style-blogs">{messages["blogs"]}</p>
      <p className="blog-post-content-text-style-blogs">
        {messages["lrem_ipsum_tis_kvasiposade_poment_vtirade_ding_eft"]}
      </p>

      <>
        <div className="blog-post-card-container-blogs">
          <div className="horizontal-button-group-blogs">
            {localsort ? (
              <button
                className="button-with-icon2-blogs"
                onClick={() => {
                  setLocalsort("");
                  loadBlogs("nosort");
                }}
              >
                {localsort}
                <SvgIcon1 className="svg-container4-blogs" />
              </button>
            ) : (
              <></>
            )}
            {localcateg.length > 0 ? (
              localcateg.map((categ, index) => (
                <button
                  className="button-with-icon2-blogs"
                  onClick={() => {
                    setLocalcateg(localcateg.filter((item) => item !== categ));
                    loadBlogs(categ);
                  }}
                  key={index}
                >
                  {categ}
                  <SvgIcon1 className="svg-container4-blogs" />
                </button>
              ))
            ) : (
              <></>
            )}
          </div>
          <div className="horizontal-layout-container-blogs">
            <div className="flexible-container-blogs">
              <div className="rounded-header-container-blogs">
                <SvgIcon4 className="svg-container5-blogs" />
                <input
                  onChange={(e) => setSearchterm(e.target.value)}
                  value={searchterm}
                  placeholder="search here..."
                  type="text"
                  className="input-with-icon-blogs input-style-f62-blogs::placeholder"
                />
              </div>
            </div>

            <button
              className="button-with-icon3-blogs"
              onClick={() => setShowfilter(!showfilter)}
            >
              <SvgIcon5 className="svg-container6-blogs" />
              {messages["filter"]}
            </button>
          </div>
        </div>
        {loading ? (
          <div
            className="spinner"
            style={{
              margin: "30px auto",
              width: "100%",
              display: "flex",
              justifyContent: "center",
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
        ) : noBlogs ? (
          <h1 style={{ textAlign: "center" }}>No blogs</h1>
        ) : (
          <>
            <ContentRenderer blogs={blogs} />

            <button
              className="blog-load-more-button-style-blogs"
              onClick={() => setPage(page + 1)}
              disabled={loading3}
            >
              {loading3 ? (
                <div
                  className="loader"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <TailSpin
                    visible={true}
                    height="30"
                    width="30"
                    color="#fff"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                </div>
              ) : (
                messages["load_more"]
              )}
            </button>
          </>
        )}
      </>

      <div
        className={
          showfilter ? "filtertab pacityfull" : "filtertab opacityzero"
        }
        onClick={() => {
          setShowfilter(!showfilter);
          loadBlogs("");
        }}
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
                  localsort === "popularity"
                    ? setLocalsort("")
                    : setLocalsort("popularity");
                }}
                style={
                  localsort === "popularity"
                    ? { fontWeight: "600", fontSize: "17px" }
                    : null
                }
              >
                Popularity
              </p>
            </div>
          </div>
          <div className="coorsoptionsdiv">
            <div
              className="maintopvisiblediv"
              onClick={() => {
                setShowcat((prev) => !prev);
                loadCategs();
              }}
            >
              <p>Categories</p>
              <svg
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={
                  showcat
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
                showcat
                  ? "colordropdownitems height240px"
                  : "colordropdownitems"
              }
            >
              {loading2 ? (
                <p>Loading...</p>
              ) : (
                categs?.map((c, i) => (
                  <div
                    key={i}
                    style={
                      localcateg.includes(c.name)
                        ? {
                            border: "2px solid rgba(0, 0, 0, 0.392)",
                            textAlign: "center",
                          }
                        : { textAlign: "center" }
                    }
                    onClick={() => togglecateg(c.name)}
                  >
                    <p style={{ textAlign: "center", width: "100%" }}>
                      {c.name}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="buttonsinfiltersidebar">
            <button
              onClick={() => {
                loadBlogs();
                setShowfilter(false);
              }}
            >
              Apply
            </button>
            <button
              onClick={() => {
                setLocalsort("");
                setLocalcateg([]);
                loadBlogs();
                setShowfilter(false);
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

export default ContentDisplayWidgetGenerator;
