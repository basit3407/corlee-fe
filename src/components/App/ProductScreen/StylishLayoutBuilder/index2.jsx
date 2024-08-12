import StylishDisplay from "../StylishDisplay";
import "./style.css";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { api } from "../../../../config/api";
import { toast } from "sonner";

function StylishLayoutBuilder(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noProducts, setNoproducts] = useState(false);

  const fetchFabrics = async () => {
    try {
      setLoading(true);
      let filtercolorstring = "";

      if (props.color?.length > 0) {
        filtercolorstring = "&colors=";

        props.color.map((color, index) => {
          filtercolorstring =
            filtercolorstring + `${index === 0 ? "" : ","}${color}`;
        });
      }

      const response = await api.get(
        `/favorite_fabrics/?${props.color ? `${filtercolorstring}` : ""}${
          props.sort ? `&sort_by=${props.sort}` : ""
        }`
      );
      if (response.data.length > 0) {
        setProducts(response.data);
        setNoproducts(false);
        response.data.forEach((item) => {
          item.fabric.related_fabrics.length > 0 &&
            item.fabric.related_fabrics.forEach((inneritem) => {
              props.setRelatedFabrics((prev) => [...prev, inneritem]);
            });
        });
      } else {
        setNoproducts(true);
      }
      props.setRelatedLoading(false);

      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
      props.setRelatedLoading(false);
    }
  };

  useEffect(() => {
    fetchFabrics();
  }, [props.color, props.sort]);

  return (
    <div
      className="vertical-centered-flex-container"
      style={
        loading || noProducts
          ? { display: "flex", alignItems: "center", justifyContent: "center" }
          : { width: "100%" }
      }
    >
      {!loading ? (
        <>
          {!noProducts ? (
            products.map((e, i) => (
              <StylishDisplay key={i} {...e.fabric} {...props} />
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
              No products in favourites
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
