import ContactFormSection from "./ContactFormSection";
import Container from "../../UI/Container";
function ComponentYouSelected(props) {
  return (
    <Container>
      <div className="main-content-container-cu">
        <div className="vertical-layout-container-cu">
          <ContactFormSection {...props} />
        </div>
      </div>
    </Container>
  );
}

export default ComponentYouSelected;
