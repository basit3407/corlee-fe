import "./style.css";
import { TailSpin } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { api } from "../../../config/api";
import Productinbag from "./Productinbag";
import GetPersonalDetails from "./GetPersonalDetails";
import GetContactDetails from "./GetContactDetails";
import GetAddress from "./GetAddress";
import { useNavigate } from "react-router-dom";

function BagScreenMainComp(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [getUserDetails, setGetUserDetails] = useState("");
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [noProducts, setNoProducts] = useState(true);
  const [productslen, setProductslen] = useState(0);
  const navigate = useNavigate();
  const loadData = async () => {
    try {
      setLoading(true);
      const response = await api.get("/cart-items/");
      if (response.status === 200) {
        if (response.data.cart_items.length === 0) {
          setNoProducts(true);
          setProductslen(0);
          setLoading(false);
          setUser(response.data.user);
        } else {
          setProducts(response.data.cart_items);
          setProductslen(response.data.cart_items.length);
          setUser(response.data.user);
          setLoading(false);
          setNoProducts(false);
        }
      }
    } catch (e) {
      console.log(e);
      toast.error(e.message || "Something went wrong");
      setLoading(false);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  const checkout = async () => {
    try {
      if (!user.name) {
        toast.error("Name cannot be empty");
        return;
      } else if (!user.company_name) {
        toast.error("Company name cannot be empty");
        return;
      } else if (!user.phone) {
        toast.error("Phone cannot be empty");
        return;
      } else if (!user.email) {
        toast.error("Email cannot be empty");
        return;
      } else if (!user.address) {
        toast.error("Address cannot be empty");
        return;
      }
      if (products.length === 0) {
        toast.error("No products in bag.");
        return;
      }
      setCheckoutLoading(true);
      const response = await api.post("/checkout/");
      if (response.status === 201) {
        setCheckoutLoading(false);
        toast.success("Order placed successfully");
        setProducts([]);
        setProductslen(0);
        navigate(`/thankyou/${response.data.request_number}`);
        props.setRefresh(Date.now());
      } else {
        toast.error(response.data[Object.keys(response.data)[0]]);
        setCheckoutLoading(false);
      }
    } catch (e) {
      toast.error(
        `${Object.keys(e.response.data)[0]} : ${
          e.response.data[Object.keys(e.response.data)[0]]
        }` || "Something went wrong"
      );
      setCheckoutLoading(false);
    }
  };

  const deleteProduct = async (item_code) => {
    if (productslen === 1) {
      setNoProducts(true);
      setProductslen(0);
      return;
    }
    // setLoading(true);
    // const updatedProducts = products.filter((item) => item.id !== item_code);
    // setProducts((prev) => prev.filter((item) => item.id !== item_code));
    // setLoading(false);
    setProductslen((prev) => prev - 1);
  };

  return (
    <>
      <h1 className="bag">Bag</h1>
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
        <div className="bagpage">
          <div className="leftdiv">
            <div className="headingdiv">
              <h1>Shopping bag</h1>
              <p>
                {!noProducts ? productslen : 0}{" "}
                {productslen > 1 || noProducts ? "items" : "item"}
              </p>
            </div>
            <div className="headingsdiv">
              <p className="productdetails">Product Details</p>
              <p className="quantity">
                Quantity <span>{"(yd)"}</span>
              </p>
              <p className="color">Color</p>
            </div>
            <div className="productsinbagdiv">
              {noProducts ? (
                <h2>No products in bag</h2>
              ) : (
                products?.map((item, index) => (
                  <Productinbag
                    product={item}
                    key={index}
                    index={index}
                    setProducts={setProducts}
                    allproducts={products}
                    loadDatafc={loadData}
                    deleteProduct={deleteProduct}
                    {...props}
                  />
                ))
              )}
            </div>
          </div>
          <div className="rightdiv">
            <div className="detailsdiv">
              <div className="detaildiv">
                <div className="leftsidecontet">
                  <div
                    className={
                      user.company_name && user.name
                        ? "tickmark"
                        : "tickmark greytickmark"
                    }
                  >
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.9334 0.673555C16.176 0.0142946 15.0178 0.138256 14.417 0.942892L7.62596 10.0385C7.44526 10.2805 7.09141 10.3047 6.87945 10.0895L3.54918 6.70881C2.92082 6.07094 1.89187 6.07113 1.26374 6.70923C0.649288 7.33343 0.649288 8.33516 1.26374 8.95936L4.4379 12.1839C6.13715 13.9101 8.97056 13.7342 10.4432 11.811L17.1707 3.025C17.7247 2.30144 17.6208 1.27185 16.9334 0.673555Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="textdivinbagdetails">
                    <p>Personal Details</p>
                    <p>{user.name || "Empty"}</p>
                    <p>{user.company_name || "Empty"}</p>
                  </div>
                </div>
                <div className="rightsidecontent">
                  <p onClick={() => setGetUserDetails("personal")}>Change</p>
                </div>
              </div>
              <div className="detaildiv">
                <div className="leftsidecontet">
                  <div
                    className={
                      user.email && user.phone
                        ? "tickmark"
                        : "tickmark greytickmark"
                    }
                  >
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.9334 0.673555C16.176 0.0142946 15.0178 0.138256 14.417 0.942892L7.62596 10.0385C7.44526 10.2805 7.09141 10.3047 6.87945 10.0895L3.54918 6.70881C2.92082 6.07094 1.89187 6.07113 1.26374 6.70923C0.649288 7.33343 0.649288 8.33516 1.26374 8.95936L4.4379 12.1839C6.13715 13.9101 8.97056 13.7342 10.4432 11.811L17.1707 3.025C17.7247 2.30144 17.6208 1.27185 16.9334 0.673555Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="textdivinbagdetails">
                    <p>Contact Details</p>
                    <p>{user.phone || "Empty"}</p>
                    <p>{user.email || "Empty"}</p>
                  </div>
                </div>
                <div className="rightsidecontent">
                  <p onClick={() => setGetUserDetails("contact")}>Change</p>
                </div>
              </div>
              <div className="detaildiv">
                <div className="leftsidecontet">
                  <div
                    className={
                      user.address
                        ? "tickmark lasttick"
                        : "tickmark lasttick greytickmark"
                    }
                  >
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.9334 0.673555C16.176 0.0142946 15.0178 0.138256 14.417 0.942892L7.62596 10.0385C7.44526 10.2805 7.09141 10.3047 6.87945 10.0895L3.54918 6.70881C2.92082 6.07094 1.89187 6.07113 1.26374 6.70923C0.649288 7.33343 0.649288 8.33516 1.26374 8.95936L4.4379 12.1839C6.13715 13.9101 8.97056 13.7342 10.4432 11.811L17.1707 3.025C17.7247 2.30144 17.6208 1.27185 16.9334 0.673555Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="textdivinbagdetails">
                    <p>Shipping to</p>
                    <p>{user.address || "Empty"}</p>
                  </div>
                </div>
                <div className="rightsidecontent">
                  <p onClick={() => setGetUserDetails("address")}>Change</p>
                </div>
              </div>
            </div>
            <div className="buttoninrightsideofdetailssectioninbag">
              <button
                style={
                  user.address &&
                  user.phone &&
                  user.email &&
                  user.name &&
                  user.company_name
                    ? {
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }
                    : {
                        cursor: "not-allowed",
                        backgroundColor: "grey",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }
                }
                onClick={checkout}
              >
                {checkoutLoading ? (
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
                ) : (
                  "Checkout"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="getDetaisDiv">
        {getUserDetails === "personal" ? (
          <GetPersonalDetails
            user={user}
            setUser={setUser}
            setGetUserDetails={setGetUserDetails}
          />
        ) : getUserDetails === "contact" ? (
          <GetContactDetails
            user={user}
            setUser={setUser}
            setGetUserDetails={setGetUserDetails}
          />
        ) : getUserDetails === "address" ? (
          <GetAddress
            user={user}
            setUser={setUser}
            setGetUserDetails={setGetUserDetails}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default BagScreenMainComp;
