import "./style.css";

function ContentCard1({ imgContent12, imgContent11, publicationDate2, categoryLabel3, contentSubtitle3, dynamicContentSnippet3, authorName1 }) {
  return (
    <div className="tech-card-container">
      <p className="tech-category-subtitle-text-style">{categoryLabel3}</p>
      <p className="tech-card-subtitle-text-style">{contentSubtitle3}</p>
      <p className="tech-category-card-text">{dynamicContentSnippet3}</p>
      <div className="article-meta-container">
        <img className="profile-image-circle" src={imgContent11} />
        <div className="author-info-container">
          <p className="author-info-style">{authorName1}</p>
          <img alt="" className="mini-icon" src={imgContent12} />
        </div>
        <p className="publication-info-text-style">{publicationDate2}</p>
      </div>
    </div>
  );
}

export default ContentCard1;
