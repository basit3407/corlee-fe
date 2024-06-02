import { mockData } from "../../../util";
import InquiryDisplaySection from "./InquiryDisplaySection";

function ContactUsDropDown() {
  return (
    <div
      style={{ display: "inline-block", width: "719px" }}
      data-ignore="used only for top most containter width"
    >
      <InquiryDisplaySection
        possibleInquiryTypes={mockData.possibleInquiryTypes}
      />
    </div>
  );
}

export default ContactUsDropDown;
