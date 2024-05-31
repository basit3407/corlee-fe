import "./style.css";

function TechCardDisplay({ imgContent10, imgContent9, publicationDate5, techCategory1, cardSubtitle1, excerptLoremText1, authorInfo1 }) {
  return (
    <div className="tech-card-container">
      <p className="tech-category-subtitle-text-style">{techCategory1}</p>
      <p className="tech-card-subtitle-text-style">{cardSubtitle1}</p>
      <p className="tech-category-card-text">{excerptLoremText1}</p>
      <div className="article-meta-container">
        <img className="profile-image-circle" src={imgContent9} />
        <div className="author-info-container">
          <p className="author-info-style">{authorInfo1}</p>
          <img alt="" className="mini-icon" src={imgContent10} />
        </div>
        <p className="publication-info-text-style">{publicationDate5}</p>
      </div>
    </div>
  );
}

export default TechCardDisplay;
