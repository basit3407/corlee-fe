import React, { useEffect, useState } from "react";
import BottomBar from "../components/App/BottomBar";
import Navbar from "../components/App/Navbar";
import Productcomponent from "../components/App/ProductScreen";
import StylishProductDisplay from "../components/App/ProductScreen/StylishProductDisplay";
import { useNavigate, useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { api } from "../config/api";
import Imagesinproduct from "./Imagesinproduct";
import { toast } from "sonner";
import Model from "./model.jsx";
import "../index.css";

const singleproduct = () => {
  const [model, setModel] = useState("/models/tshirt/scene.gltf");
  let text = "(by yard)";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [weight, setweight] = useState(1);
  const [color, setcolor] = useState("purple");
  const { productid } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [refresh, setRefresh] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);
  const [showLoginPopup, setshowLoginPopup] = useState(false);
  const [buttonloading, setButtonloading] = useState(0);
  const [image, setImage] = useState("/textures/one.jpg");
  const navigate = useNavigate();

  const togglefav = async () => {
    if (localStorage.getItem("token")) {
      setProduct({ ...product, is_favorite: !product.is_favorite });
      await api.post("/toggle_favorite/", { fabric_id: product.id });
      setRefresh((prev) => prev + 1);
    } else {
      setshowLoginPopup(true);
    }
  };

  const loadFabricData = async () => {
    try {
      window.scrollTo(0, 0);
      setLoading(true);

      const response = await api.get(`/fabrics/${productid}/`);
      if (response.status === 200) {
        setProduct(response.data);
        setcolor(response.data.color_images[0].color);
        setCurrentImages(response.data.color_images[0]);
        setLoading(false);
      } else {
        navigate("/");
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      navigate("/");
    }
  };

  useEffect(() => {
    loadFabricData();
  }, [productid]);

  const addToCart = async (e, go) => {
    try {
      e.stopPropagation();
      if (!localStorage.getItem("token")) {
        setshowLoginPopup(true);
        return;
      }

      if (weight === 0) {
        toast.error("Quantity cannot be zero");
        return;
      }
      if (buttonloading == 1 || buttonloading == 2) {
        return;
      }
      go ? setButtonloading(2) : setButtonloading(1);

      const response = await api.post("/cart-items/", {
        fabric_id: product.id,
        color: color,
        quantity: `${weight}`,
      });
      if (response.status === 201 || response.status === 200) {
        if (go) {
          toast.success("Ready to checkout");
          navigate("/user/bag");
        } else {
          toast.success("Item added to bag");
        }
        setButtonloading(0);
        setRefresh((prev) => prev + 1);
      } else {
        setButtonloading(0);
        toast.error("Something went wrong");
      }
    } catch (err) {
      setButtonloading(0);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <Navbar refresh={refresh} />
      <div className="productdetailsdiv2">
        {loading ? (
          <div
            className="tailspin"
            style={{
              width: "100%",
              height: "70vh",
              display: "flex",
              alignItems: "center",
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
        ) : (
          <>
            <Imagesinproduct
              currentImages={currentImages}
              setCurrentImages={setCurrentImages}
              product={product}
            />
            <div className="productdetailsdic">
              <button
                className="heartbutton"
                onClick={togglefav}
                style={{ cursor: "pointer" }}
              >
                {product.is_favorite ? (
                  <svg
                    width="28"
                    height="26"
                    viewBox="0 0 28 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.8875 22.1312L13.75 22.2687L13.5988 22.1312C7.0675 16.205 2.75 12.2863 2.75 8.3125C2.75 5.5625 4.8125 3.5 7.5625 3.5C9.68 3.5 11.7425 4.875 12.4712 6.745H15.0288C15.7575 4.875 17.82 3.5 19.9375 3.5C22.6875 3.5 24.75 5.5625 24.75 8.3125C24.75 12.2863 20.4325 16.205 13.8875 22.1312ZM19.9375 0.75C17.545 0.75 15.2487 1.86375 13.75 3.61C12.2513 1.86375 9.955 0.75 7.5625 0.75C3.3275 0.75 0 4.06375 0 8.3125C0 13.4963 4.675 17.745 11.7563 24.1663L13.75 25.9813L15.7437 24.1663C22.825 17.745 27.5 13.4963 27.5 8.3125C27.5 4.06375 24.1725 0.75 19.9375 0.75Z"
                      fill="#F76767"
                    />
                    <path
                      d="M8.5 1.75L12 3.75L14 5.25L14.5 4.25L17.5 2.25L19.5 1.75L23 2.75L25.5 5.25C25.8333 6.58333 26.4 9.45 26 10.25C25.6 11.05 23.8333 14.25 23 15.75L13.5 23.75L5 15.75L1.5 11.25L1 7.75L2.5 5.25L4.5 2.25L8.5 1.75Z"
                      fill="#F76767"
                    />
                  </svg>
                ) : (
                  <svg
                    width="31"
                    height="29"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.138,24.7654l-0.138,0.138l-0.151,-0.138c-6.531,-5.926 -10.849,-9.845 -10.849,-13.819c0,-2.75 2.062,-4.812 4.812,-4.812c2.118,0 4.18,1.375 4.909,3.245h2.558c0.729,-1.87 2.791,-3.245 4.909,-3.245c2.75,0 4.812,2.062 4.812,4.812c0,3.974 -4.317,7.893 -10.862,13.819zM22.188,3.3844c-2.393,0 -4.689,1.114 -6.188,2.86c-1.499,-1.746 -3.795,-2.86 -6.188,-2.86c-4.234,0 -7.562,3.314 -7.562,7.562c0,5.184 4.675,9.433 11.756,15.854l1.994,1.815l1.994,-1.815c7.081,-6.421 11.756,-10.67 11.756,-15.854c0,-4.248 -3.327,-7.562 -7.562,-7.562z"
                      fill="black"
                    />
                  </svg>
                )}
              </button>
              <h1>{product.item_code}</h1>
              <p className="functionaltext">Functional</p>
              <p className="functionaltext2">{product.description}</p>
              <p className="colorsinproduct">Colors</p>
              <div className="colorsinproduct">
                {product.color_images.map((item, index) => (
                  <div
                    className="color1inproduct"
                    key={index}
                    style={
                      color === item.color
                        ? {
                            backgroundColor: item.color,
                            border: "3px solid white",
                            cursor: "pointer",
                          }
                        : {
                            backgroundColor: item.color,
                            cursor: "pointer",
                            border: "3px solid transparent",
                          }
                    }
                    onClick={() => {
                      console.log(
                        product.color_images.filter(
                          (item2) => item2.color == item.color
                        )
                      );
                      setCurrentImages(
                        ...product.color_images.filter(
                          (item2) => item2.color == item.color
                        )
                      );
                      setcolor(item.color);
                    }}
                  ></div>
                ))}
              </div>
              <p className="quantitydivinproduct">
                Quantity <span>{text}</span>{" "}
              </p>
              <div className="quantitydiv inproduct">
                <button
                  onClick={() => {
                    if (weight > 1) {
                      setweight((prev) => prev - 1);
                    }
                  }}
                >
                  -
                </button>
                {weight}
                <button onClick={() => setweight((prev) => prev + 1)}>+</button>
              </div>
              <div className="buttonsinproduct">
                <button
                  className="primbutton"
                  onClick={(e) => {
                    addToCart(e, false);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {buttonloading == 1 ? (
                    <TailSpin
                      visible={true}
                      height="30"
                      width="30"
                      color="#000"
                      ariaLabel="tail-spin-loading"
                      radius="1"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  ) : (
                    <>
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.2778 5.80085H18.2589C18.1416 4.29694 17.484 2.89401 16.417 1.87111C15.3499 0.848205 13.9516 0.280273 12.5 0.280273C11.0484 0.280273 9.65007 0.848205 8.58301 1.87111C7.51595 2.89401 6.85839 4.29694 6.74111 5.80085H2.72222C2.13285 5.80085 1.56762 6.04422 1.15087 6.47741C0.734126 6.91061 0.5 7.49815 0.5 8.11078V21.9703C0.5 22.583 0.734126 23.1705 1.15087 23.6037C1.56762 24.0369 2.13285 24.2803 2.72222 24.2803H22.2778C22.8671 24.2803 23.4324 24.0369 23.8491 23.6037C24.2659 23.1705 24.5 22.583 24.5 21.9703V8.11078C24.5 7.49815 24.2659 6.91061 23.8491 6.47741C23.4324 6.04422 22.8671 5.80085 22.2778 5.80085ZM12.5 3.02894C13.2481 3.02901 13.971 3.30926 14.5365 3.81834C15.102 4.32742 15.472 5.03124 15.5789 5.80085H9.42111C9.52798 5.03124 9.89804 4.32742 10.4635 3.81834C11.029 3.30926 11.7519 3.02901 12.5 3.02894ZM21.8333 21.5084H3.16667V8.57276H6.72222V9.95872C6.72222 10.3263 6.8627 10.6788 7.11275 10.9387C7.36279 11.1987 7.70193 11.3447 8.05556 11.3447C8.40918 11.3447 8.74832 11.1987 8.99836 10.9387C9.24841 10.6788 9.38889 10.3263 9.38889 9.95872V8.57276H15.6111V9.95872C15.6111 10.3263 15.7516 10.6788 16.0016 10.9387C16.2517 11.1987 16.5908 11.3447 16.9444 11.3447C17.2981 11.3447 17.6372 11.1987 17.8873 10.9387C18.1373 10.6788 18.2778 10.3263 18.2778 9.95872V8.57276H21.8333V21.5084Z"
                          fill="white"
                        />
                      </svg>
                      Add to Bag
                    </>
                  )}
                </button>
                <button
                  className="secbutton"
                  onClick={(e) => {
                    addToCart(e, true);
                  }}
                >
                  {buttonloading === 2 ? (
                    <TailSpin
                      visible={true}
                      height="30"
                      width="30"
                      color="#000"
                      ariaLabel="tail-spin-loading"
                      radius="1"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  ) : (
                    "Check out"
                  )}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="horizontaldiv">
        <div className="onedivofproduct">
          <p className="mainkeytext">Item Code</p>
          <div className="maintextans">
            {!loading ? product.item_code : "loading..."}
          </div>
        </div>
        <div className="lineinproducts"></div>
        <div className="onedivofproduct">
          <p className="mainkeytext">Composition</p>
          <div className="maintextans">
            {!loading ? product.composition : "loading..."}
          </div>
        </div>
        <div className="lineinproducts"></div>
        <div className="onedivofproduct">
          <p className="mainkeytext">Weight</p>
          <div className="maintextans">
            {!loading ? product.weight + "g" : "loading..."}
          </div>
        </div>
        <div className="lineinproducts"></div>
        <div className="onedivofproduct">
          <p className="mainkeytext">Finish</p>
          <div className="maintextans">
            {!loading ? product.finish : "loading..."}
          </div>
        </div>
        <div className="lineinproducts"></div>
        <div className="onedivofproduct last">
          <div
            className="maintextans underlinehover"
            onClick={() => {
              navigate(`/contact/${product.item_code}`);
            }}
          >
            Need Support ?
          </div>
        </div>
      </div>

      <div className="modelDiv">
        <Model
          modelUrl={model}
          imageUrl={image}
          scale={
            model === "/models/tshirt/scene.gltf"
              ? 2
              : model === "/models/shirt/scene.gltf"
              ? 0.005
              : model === "/models/shorts/scene.gltf"
              ? 0.8
              : model === "/models/jacket/scene.gltf"
              ? 0.5
              : 1.5
          }
        />
        <div className="modelButtons">
          <button
            onClick={() => {
              setModel("/models/shirt/scene.gltf");
            }}
          >
            <img src="/modelImages/shirt.png" alt="" />
          </button>
          <button
            onClick={() => {
              setModel("/models/shorts/scene.gltf");
            }}
          >
            <img src="/modelImages/shorts.png" alt="" />
          </button>
          <button
            onClick={() => {
              setModel("/models/pants/scene.gltf");
            }}
          >
            <img src="/modelImages/jeans.png" alt="" />
          </button>
          <button
            onClick={() => {
              setModel("/models/tshirt/scene.gltf");
            }}
          >
            <img src="/modelImages/tshirt.png" alt="" />
          </button>
          <button
            onClick={() => {
              setModel("/models/jacket/scene.gltf");
            }}
          >
            <img src="/modelImages/jacket.png" alt="" />
          </button>
        </div>
        <div className="modelColors">
          <div
            className="color"
            style={{ backgroundColor: "red" }}
            onClick={() => {
              setImage("/textures/one.jpg");
            }}
          ></div>
          <div
            className="color"
            style={{ backgroundColor: "burlywood" }}
            onClick={() => {
              setImage("/textures/two.jpg");
            }}
          ></div>
          <div
            className="color"
            style={{ backgroundColor: "green" }}
            onClick={() => {
              setImage("/textures/three.jpg");
            }}
          ></div>
          <div
            className="color"
            onClick={() => {
              setImage("/textures/four.jpg");
            }}
            style={{ backgroundColor: "orange" }}
          ></div>
        </div>
      </div>
      <StylishProductDisplay
        product={true}
        products={product.related_fabrics}
        loading={loading}
      />
      {showLoginPopup && (
        <div
          className="loginpopup"
          onClick={(e) => {
            e.stopPropagation();
            setshowLoginPopup(false);
          }}
        >
          <div
            className="loginpopuswrapper"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div
              className="closeicondiv"
              onClick={(e) => {
                e.stopPropagation();
                setshowLoginPopup(false);
              }}
            >
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.15993"
                  y="1.15993"
                  width="25.976"
                  height="25.976"
                  rx="12.988"
                  stroke="#666666"
                  stroke-width="2.31986"
                />
                <path
                  d="M19.5203 8.78451C19.4414 8.70546 19.3477 8.64275 19.2446 8.59996C19.1414 8.55717 19.0308 8.53514 18.9192 8.53514C18.8075 8.53514 18.6969 8.55717 18.5938 8.59996C18.4906 8.64275 18.3969 8.70546 18.318 8.78451L14.1483 12.9457L9.97865 8.77598C9.89971 8.69704 9.80599 8.63442 9.70284 8.59169C9.59969 8.54897 9.48914 8.52698 9.3775 8.52698C9.26586 8.52698 9.1553 8.54897 9.05216 8.59169C8.94901 8.63442 8.85529 8.69704 8.77635 8.77598C8.6974 8.85493 8.63478 8.94865 8.59206 9.05179C8.54933 9.15494 8.52734 9.26549 8.52734 9.37713C8.52734 9.48878 8.54933 9.59933 8.59206 9.70247C8.63478 9.80562 8.6974 9.89934 8.77635 9.97828L12.946 14.148L8.77635 18.3176C8.6974 18.3966 8.63478 18.4903 8.59206 18.5935C8.54933 18.6966 8.52734 18.8072 8.52734 18.9188C8.52734 19.0304 8.54933 19.141 8.59206 19.2441C8.63478 19.3473 8.6974 19.441 8.77635 19.5199C8.85529 19.5989 8.94901 19.6615 9.05216 19.7042C9.1553 19.747 9.26586 19.769 9.3775 19.769C9.48914 19.769 9.59969 19.747 9.70284 19.7042C9.80599 19.6615 9.89971 19.5989 9.97865 19.5199L14.1483 15.3503L18.318 19.5199C18.397 19.5989 18.4907 19.6615 18.5938 19.7042C18.697 19.747 18.8075 19.769 18.9192 19.769C19.0308 19.769 19.1414 19.747 19.2445 19.7042C19.3477 19.6615 19.4414 19.5989 19.5203 19.5199C19.5993 19.441 19.6619 19.3473 19.7046 19.2441C19.7473 19.141 19.7693 19.0304 19.7693 18.9188C19.7693 18.8072 19.7473 18.6966 19.7046 18.5935C19.6619 18.4903 19.5993 18.3966 19.5203 18.3176L15.3506 14.148L19.5203 9.97828C19.8443 9.65426 19.8443 9.10853 19.5203 8.78451Z"
                  fill="#666666"
                />
              </svg>
            </div>

            <div className="loginpopupsvgdiv">
              <svg
                width="76"
                height="80"
                viewBox="0 0 76 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M71.8542 48.0208C73.4515 48.9236 74.4845 50.2691 74.9532 52.0573C75.422 53.8455 75.2049 55.5382 74.3022 57.1354L70.9688 62.8646C70.066 64.4618 68.7206 65.4948 66.9324 65.9635C65.1442 66.4323 63.4515 66.2153 61.8542 65.3125L48.0001 57.3438V73.3333C48.0001 75.1389 47.3404 76.7014 46.0209 78.0208C44.7015 79.3403 43.139 80 41.3334 80H34.6667C32.8612 80 31.2987 79.3403 29.9792 78.0208C28.6598 76.7014 28.0001 75.1389 28.0001 73.3333V57.3438L14.1459 65.3125C12.5487 66.2153 10.856 66.4323 9.06778 65.9635C7.27959 65.4948 5.9341 64.4618 5.03132 62.8646L1.69799 57.1354C0.795213 55.5382 0.578199 53.8455 1.04695 52.0573C1.5157 50.2691 2.54869 48.9236 4.14591 48.0208L18.0001 40L4.14591 31.9792C2.54869 31.0764 1.5157 29.7309 1.04695 27.9427C0.578199 26.1545 0.795213 24.4618 1.69799 22.8646L5.03132 17.1354C5.9341 15.5382 7.27959 14.5052 9.06778 14.0365C10.856 13.5677 12.5487 13.7847 14.1459 14.6875L28.0001 22.6562V6.66667C28.0001 4.86111 28.6598 3.29861 29.9792 1.97917C31.2987 0.659722 32.8612 0 34.6667 0H41.3334C43.139 0 44.7015 0.659722 46.0209 1.97917C47.3404 3.29861 48.0001 4.86111 48.0001 6.66667V22.6562L61.8542 14.6875C63.4515 13.7847 65.1442 13.5677 66.9324 14.0365C68.7206 14.5052 70.066 15.5382 70.9688 17.1354L74.3022 22.8646C75.2049 24.4618 75.422 26.1545 74.9532 27.9427C74.4845 29.7309 73.4515 31.0764 71.8542 31.9792L58.0001 40L71.8542 48.0208Z"
                  fill="black"
                />
                <path
                  d="M36.125 47.5859L35.6328 23H39.8984L39.4062 47.5859H36.125ZM35.7734 56.4688C35.2578 55.9531 35 55.3203 35 54.5703C35 53.8203 35.2578 53.1875 35.7734 52.6719C36.3047 52.1406 36.9766 51.875 37.7891 51.875C38.6016 51.875 39.2656 52.1406 39.7812 52.6719C40.2969 53.1875 40.5547 53.8203 40.5547 54.5703C40.5547 55.3203 40.2969 55.9531 39.7812 56.4688C39.2656 56.9844 38.6016 57.2422 37.7891 57.2422C36.9766 57.2422 36.3047 56.9844 35.7734 56.4688Z"
                  fill="white"
                />
              </svg>
            </div>
            <h1>Login Required</h1>
            <p>This action requires login.</p>
            <div className="buttonsinloginpopup">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/login");
                }}
              >
                Login
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setshowLoginPopup(false);
                }}
              >
                No, I'm cool
              </button>
            </div>
          </div>
        </div>
      )}
      <BottomBar />
    </div>
  );
};

export default singleproduct;
