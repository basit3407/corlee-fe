import "./style.css";

function ContentCard({ imgContent14, imgContent13, publicationDate3, categoryLabel1, contentSubtitle1, dynamicContentSnippet1, authorNameWidget1 }) {
  return (
    <div className="tech-card-container">
      <p className="tech-category-subtitle-text-style">{categoryLabel1}</p>
      <p className="tech-card-subtitle-text-style">{contentSubtitle1}</p>
      <p className="tech-category-card-text">{dynamicContentSnippet1}</p>
      <div className="article-meta-container">
        <img className="profile-image-circle" src={imgContent13} />
        <div className="author-info-container">
          <p className="author-info-style">{authorNameWidget1}</p>
          <img alt="" className="mini-icon" src={imgContent14} />
        </div>
        <p className="publication-info-text-style">{publicationDate3}</p>
      </div>
    </div>
  );
}

export default ContentCard;
