import "./style.css";

function SectionContentRenderer({ sectionTitleOrLabel }) {
  return (
    <div className="section-title-container">
      <p className="section-title-label-style">{sectionTitleOrLabel}</p>
    </div>
  );
}

export default SectionContentRenderer;
