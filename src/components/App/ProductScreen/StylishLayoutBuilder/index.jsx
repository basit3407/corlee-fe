import StylishDisplay from "../StylishDisplay";
import StylishCardGallery from "../StylishCardGallery";
import DisplayContent from "../DisplayContent";
import CreativeDesignView from "../CreativeDesignView";
import StylishContentBlock from "../StylishContentBlock";
import DisplayContent1 from "../DisplayContent1";
import "./style.css";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { api } from "../../../../config/api";
import { toast } from "sonner";

function StylishLayoutBuilder(props) {
  const name = props.name;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noProducts, setNoproducts] = useState(false);
  const fetchFabrics = async () => {
    props.setPage(1);
    setLoading(true);

    let filtercolorstring = "";

    props.color.map((color) => {
      filtercolorstring = filtercolorstring + `&colors=${color}`;
    });

    console.log(
      "Request url : ",
      `/fabrics/?${
        name ? `keyword=${name === "Best Selling" ? "best_selling" : name}` : ""
      }${props.color.length > 0 ? `${filtercolorstring}` : ""}${
        props.sort ? `&sort_by=${props.sort}` : ""
      }${props.page ? `&page=${props.page}` : ""}`
    );

    const response = await api.get(
      `/fabrics/?${name ? `keyword=${name}` : ""}${
        props.color.length > 0 ? `${filtercolorstring}` : ""
      }${props.sort ? `&sort_by=${props.sort}` : ""}${
        props.page ? `&page=${props.page}` : ""
      }`
    );
    console.log("Response  :", response);

    if (response.data.results.length > 0) {
      setProducts(response.data.results);
      setNoproducts(false);
    } else {
      setNoproducts(true);
    }
    setLoading(false);
  };

  const fetchNextPage = async () => {
    if (props.page !== 1) {
      try {
        props.setLoading(true);

        let filtercolorstring = "";

        props.color.map((color) => {
          filtercolorstring = filtercolorstring + `&colors=${color}`;
        });

        const response = await api.get(
          `/fabrics/?${name ? `keyword=${name}` : ""}${
            props.color.length > 0 ? `${filtercolorstring}` : ""
          }${props.sort ? `&sort_by=${props.sort}` : ""}${
            props.page ? `&page=${props.page}` : ""
          }`
        );

        if (response.data.results.length > 0) {
          setProducts([...products, ...response.data.results]);
        }
        props.setLoading(false);
      } catch (e) {
        if (e.response.data.detail === "Invalid page.") {
          toast.error("No more products");
        }
        props.setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchFabrics();
  }, [name, props.color, props.sort]);

  useEffect(() => {
    fetchNextPage();
  }, [props.page]);
  return (
    <div
      className="vertical-centered-flex-container"
      style={
        loading || noProducts
          ? {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }
          : {
              width: "100%",
            }
      }
    >
      {!loading ? (
        <>
          {!noProducts ? (
            products.map((e, i) => (
              <StylishDisplay key={i} {...e} setRefresh={props.setRefresh} />
            ))
          ) : (
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: "600",
                color: "black",
                textAlign: "center",
                width: "100% !important",
                height: "100%",
                maxWidth: "20000px !important",
              }}
            >
              No Products
            </p>
          )}
        </>
      ) : (
        <div
          style={{
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
      )}
    </div>
  );
}

export default StylishLayoutBuilder;
