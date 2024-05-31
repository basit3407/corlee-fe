import ContactCard from "../ContactCard";
import "./style.css";

function RenderContactOptions({ contactOptionsArray }) {
  return (
    <div className="contact-info-container1">
      {contactOptionsArray.map((data, index) => {
        return <ContactCard {...data} key={index} />;
      })}
    </div>
  );
}

export default RenderContactOptions;
