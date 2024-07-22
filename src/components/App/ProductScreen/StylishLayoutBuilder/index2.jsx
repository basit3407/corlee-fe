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

      const response = await api.get(
        `/favorite_fabrics/?${
          props.filterColor ? `&colors=${props.filterColor}` : ""
        }${props.sortby ? `&sort_by=${props.sortby}` : ""}&page=1`
      );
      if (response.data.length > 0) {
        setProducts(response.data);
        setNoproducts(false);
      } else {
        setNoproducts(true);
      }

      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  const fetchNextPage = async () => {
    if (props.page !== 1) {
      try {
        props.setLoading(true);

        const response = await api.get(
          `/favorite_fabrics/?${
            props.filterColor ? `&colors=${props.filterColor}` : ""
          }${props.sortby ? `&sort_by=${props.sortby}` : ""}${
            props.page ? `&page=${props.page}` : ""
          }`
        );

        setProducts([...products, ...response.data]);

        props.setLoading(false);
      } catch (e) {
        console.log(e);
        props.setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchFabrics();
  }, []);

  useEffect(() => {
    fetchNextPage();
  }, [props.page]);
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
            products.map((e, i) => <StylishDisplay key={i} {...e.fabric} />)
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
