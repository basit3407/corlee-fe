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

const singleproduct = () => {
  let text = "(by meter)";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [weight, setweight] = useState(100);
  const [color, setcolor] = useState("purple");
  const { productid } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const [images, setimages] = useState({
    image1: "",
    image2: "",
    image3: "",
    image4: "",
  });

  const togglefav = async () => {
    if (localStorage.getItem("token")) {
      setProduct({ ...product, is_favorite: !product.is_favorite });
      await api.post("/toggle_favorite/", { fabric_id: product.id });
    } else {
      navigate("/login");
    }
  };

  const loadFabricData = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/fabrics/${productid}/`);
      if (response.status === 200) {
        setProduct(response.data);
        setcolor(response.data.available_colors[0]);
        setimages({
          image1: response.data.photo_url,
          image2: response.data.aux_photo1_url,
          image3: response.data.aux_photo2_url,
          image4: response.data.aux_photo3_url,
        });
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

  const addToCart = async (e) => {
    try {
      e.stopPropagation();

      if (weight === 0) {
        toast.error("Quantity cannot be zero");
        return;
      }

      const response = await api.post("/cart-items/", {
        fabric_id: product.id,
        color: color,
        quantity: `${weight}`,
      });
      console.log(response);
      if (response.status === 201 || response.status === 200) {
        toast.success("Item added to bag");
      }
    } catch (err) {
      console.log("error:", err);
    }
  };

  return (
    <div>
      <Navbar />
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
            <Imagesinproduct images={images} />
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
                    fill="none"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                  >
                    <path
                      id="Vector_5"
                      d="M16.138,24.7654l-0.138,0.138l-0.151,-0.138c-6.531,-5.926 -10.849,-9.845 -10.849,-13.819c0,-2.75 2.062,-4.812 4.812,-4.812c2.118,0 4.18,1.375 4.909,3.245h2.558c0.729,-1.87 2.791,-3.245 4.909,-3.245c2.75,0 4.812,2.062 4.812,4.812c0,3.974 -4.317,7.893 -10.862,13.819zM22.188,3.3844c-2.393,0 -4.689,1.114 -6.188,2.86c-1.499,-1.746 -3.795,-2.86 -6.188,-2.86c-4.234,0 -7.562,3.314 -7.562,7.562c0,5.184 4.675,9.433 11.756,15.854l1.994,1.815l1.994,-1.815c7.081,-6.421 11.756,-10.67 11.756,-15.854c0,-4.248 -3.327,-7.562 -7.562,-7.562z"
                      fill="black"
                      xmlns="http://www.w3.org/2000/svg"
                      data-node-id="1091:3812"
                    />
                  </svg>
                )}
              </button>
              <h1>{product.item_code}</h1>
              <p className="functionaltext">Functional</p>
              <p className="functionaltext2">{product.description}</p>
              <p className="colorsinproduct">Colors</p>
              <div className="colorsinproduct">
                {product.available_colors.map((item, index) => (
                  <div
                    className="color1inproduct"
                    key={index}
                    style={
                      color === item
                        ? {
                            backgroundColor: item,
                            border: "3px solid white",
                            cursor: "pointer",
                          }
                        : {
                            backgroundColor: item,
                            cursor: "pointer",
                            border: "3px solid transparent",
                          }
                    }
                    onClick={() => setcolor(item)}
                  ></div>
                ))}
              </div>
              <p className="quantitydivinproduct">
                Quantity <span>{text}</span>{" "}
              </p>
              <div className="quantitydiv inproduct">
                <button
                  onClick={() => {
                    if (weight > 0) {
                      setweight((prev) => prev - 10);
                    }
                  }}
                >
                  -
                </button>
                {weight}
                <button onClick={() => setweight((prev) => prev + 10)}>
                  +
                </button>
              </div>
              <div className="buttonsinproduct">
                <button
                  className="primbutton"
                  onClick={addToCart}
                  style={{ cursor: "pointer" }}
                >
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
                </button>
                <button className="secbutton">Check out</button>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="horizontaldiv">
        <div className="onedivofproduct">
          <p className="mainkeytext">Item Code</p>
          <div className="maintextans">{product.item_code}</div>
        </div>
        <div className="lineinproducts"></div>
        <div className="onedivofproduct">
          <p className="mainkeytext">Composition</p>
          <div className="maintextans">{product.composition}</div>
        </div>
        <div className="lineinproducts"></div>
        <div className="onedivofproduct">
          <p className="mainkeytext">Weight</p>
          <div className="maintextans">{product.weight}g</div>
        </div>
        <div className="lineinproducts"></div>
        <div className="onedivofproduct">
          <p className="mainkeytext">Finish</p>
          <div className="maintextans">{product.finish}</div>
        </div>
        <div className="lineinproducts"></div>
        <div className="onedivofproduct last">
          <div
            className="maintextans"
            style={{ textDecoration: "underline 2px solid black" }}
          >
            Need Support
          </div>
        </div>
      </div>

      <StylishProductDisplay
        product={true}
        products={product.related_fabrics}
      />
      <BottomBar />
    </div>
  );
};

export default singleproduct;
