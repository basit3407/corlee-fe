import SectionContentRenderer from "../SectionContentRenderer";
import "./style.css";

function SectionRenderer({ possibleSectionTitles }) {
  return (
    <div className="dark-box">
      {possibleSectionTitles.map((data, index) => {
        return <SectionContentRenderer {...data} key={index} />;
      })}
    </div>
  );
}

export default SectionRenderer;
