import TechCardDisplay from "../TechCardDisplay";
import ContentCard1 from "../ContentCard1";
import ContentCard from "../ContentCard";
import "./style.css";
import { useNavigate } from "react-router-dom";

function ContentDisplayWidget({
  imgContent10,
  imgContent12,
  imgContent14,
  imgContent6,
  imgContent7,
  imgContent8,
  imgContent9,
  imgContent11,
  imgContent13,
  publicationDate5,
  publicationDate2,
  publicationDate3,
  techCategory1,
  categoryLabel3,
  categoryLabel1,
  cardSubtitle1,
  contentSubtitle3,
  contentSubtitle1,
  excerptLoremText1,
  dynamicContentSnippet3,
  dynamicContentSnippet1,
  authorInfo1,
  authorName1,
  authorNameWidget1,
}) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="card-container-blogs"
        onClick={() => {
          navigate("/blog");
        }}
        style={{ cursor: "pointer" }}
      >
        <img className="card-container1-blogs" src={imgContent6} />
        <TechCardDisplay
          imgContent10={imgContent10}
          imgContent9={imgContent9}
          publicationDate5={publicationDate5}
          techCategory1={techCategory1}
          cardSubtitle1={cardSubtitle1}
          excerptLoremText1={excerptLoremText1}
          authorInfo1={authorInfo1}
        />
      </div>
      <div
        className="card-container-blogs"
        onClick={() => {
          navigate("/blog");
        }}
        style={{ cursor: "pointer" }}
      >
        <img className="card-container1-blogs" src={imgContent7} />
        <ContentCard1
          imgContent12={imgContent12}
          imgContent11={imgContent11}
          publicationDate2={publicationDate2}
          categoryLabel3={categoryLabel3}
          contentSubtitle3={contentSubtitle3}
          dynamicContentSnippet3={dynamicContentSnippet3}
          authorName1={authorName1}
        />
      </div>
      <div
        className="card-container-blogs"
        onClick={() => {
          navigate("/blog");
        }}
        style={{ cursor: "pointer" }}
      >
        <img className="card-container1-blogs" src={imgContent8} />
        <ContentCard
          imgContent14={imgContent14}
          imgContent13={imgContent13}
          publicationDate3={publicationDate3}
          categoryLabel1={categoryLabel1}
          contentSubtitle1={contentSubtitle1}
          dynamicContentSnippet1={dynamicContentSnippet1}
          authorNameWidget1={authorNameWidget1}
        />
      </div>
    </>
  );
}

export default ContentDisplayWidget;
