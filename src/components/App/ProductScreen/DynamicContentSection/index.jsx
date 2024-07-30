import MessageDisplay from "../MessageDisplay";
import StylishLayoutBuilder from "../StylishLayoutBuilder";
import StylishLayoutBuilder2 from "../StylishLayoutBuilder/index2";
import "./style.css";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import StylishProductDisplay from "../StylishProductDisplay";

function DynamicContentSection(props) {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState([]);
  const [sort, setSort] = useState("");
  const [relatedFabrics, setRelatedFabrics] = useState([]);
  const [noProducts, setNoproducts] = useState(false);
  const [relatedLoading, setRelatedLoading] = useState(true);

  return (
    <>
      <div className="material-card-container">
        <MessageDisplay
          {...props}
          color={color}
          sort={sort}
          setcolor={setColor}
          setSort={setSort}
          page={page}
          setPage={setPage}
        />
        {props.fav ? (
          <StylishLayoutBuilder2
            {...props}
            page={page}
            setPage={setPage}
            setLoading={setLoading}
            relatedFabrics={relatedFabrics}
            setRelatedFabrics={setRelatedFabrics}
            setRelatedLoading={setRelatedLoading}
            setNoproducts={setNoproducts}
            color={color}
            sort={sort}
          />
        ) : (
          <StylishLayoutBuilder
            {...props}
            page={page}
            setPage={setPage}
            setLoading={setLoading}
            setRelatedLoading={setRelatedLoading}
            color={color}
            relatedFabrics={relatedFabrics}
            setRelatedFabrics={setRelatedFabrics}
            setNoproducts={setNoproducts}
            sort={sort}
          />
        )}

        {!props.fav && (
          <button
            className="primary-button-style"
            onClick={() => setPage(page + 1)}
          >
            {loading ? (
              <TailSpin
                visible={true}
                height="20"
                width="20"
                color="#fff"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
              />
            ) : (
              "Load More"
            )}
          </button>
        )}
      </div>

      <StylishProductDisplay
        loading={relatedLoading}
        products={relatedFabrics}
        noProducts={noProducts}
      />
    </>
  );
}

export default DynamicContentSection;
