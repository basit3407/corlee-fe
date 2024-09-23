import InputForm from "../InputForm";
import MessageForm from "../MessageForm";
import CompanyInputWidget from "../CompanyInputWidget";
import MessageDisplayBox from "../MessageDisplayBox";
import "./style.css";
import messages from "./messages.json";
import { useState } from "react";
import { api } from "../../../../config/api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

function CustomerInformationForm(props) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  if (props.value === "general") {
    data.request_type = "general";
  } else {
    data.request_type = "product";
    data.item_code = props.value;
  }
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleoptions = (value) => {
    setData({ ...data, subject: value });
  };
  const handlesubmit = async () => {
    try {
      if (!localStorage.getItem("token")) {
        toast.error("Please login to continue");
        navigate("/login");
        return;
      }
      if (localStorage.getItem("Company") === "false") {
        toast.error("Please enter your company details continue");
        navigate("/addCompanyDetails");
        return;
      }
      setLoading(true);
      const res = await api.post("/contact/", { ...data });
      console.log(res);
      if (res.status === 200) {
        toast.success("Form submitted successfully");
        setData({});
        window.scrollTo(0, 0);
        setLoading(false);
        navigate(`/thankyou/${res.data.request_number}`);
      } else {
        toast.error("Form submission failed");
        setLoading(false);
      }
    } catch (e) {
      toast.error(
        `${Object.keys(e.response.data)[0]} : ${
          e.response.data[Object.keys(e.response.data)[0]]
        }` || "Something went wrong"
      );
      setLoading(false);
    }
  };
  return (
    <>
      <div className="fullwidth-container">
        <div className="fullwidth-container">
          {data.request_type === "product" && (
            <div className="horizontal-centered-label-container">
              <label htmlFor="name" className="bold-black-label">
                Item Code
              </label>
              <input
                name="item_code"
                onChange={handleChange}
                disabled={true}
                value={data.item_code}
                id="name"
                placeholder="i.e Jone Doe"
                type="text"
                className="input-with-label-style input-style-f62::placeholder"
              />
            </div>
          )}
          {/* Input with Label Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
        </div>
        <div className="fullwidth-container">
          <div className="horizontal-centered-label-container">
            <label htmlFor="name" className="bold-black-label">
              Subject
            </label>
            <input
              name="subject"
              onChange={handleChange}
              value={data.subject}
              id="name"
              placeholder="i.e Jone Doe"
              type="text"
              className="input-with-label-style input-style-f62::placeholder"
            />
          </div>

          {/* Input with Label Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
        </div>

        <InputForm onChange={handleChange} {...data} />
        <div className="flex-row-container incontact">
          <div className="email-field-container">
            {/* Input with Label Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
            <div className="horizontal-centered-label-container">
              <label htmlFor="email" className="bold-black-label">
                {messages["email"]}
              </label>
              <input
                id="email"
                placeholder="i.e johmdoe@email.com"
                type="text"
                name="email"
                onChange={handleChange}
                value={data.email}
                className="input-with-label-style input-style-f62::placeholder"
              />
            </div>
          </div>
          <div className="email-field-container">
            {/* Input with Label Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
            <div className="horizontal-centered-label-container">
              <label htmlFor="email" className="bold-black-label">
                Phone Number
              </label>
              <input
                id="email"
                placeholder="i.e +33 123456 789"
                type="text"
                className="input-with-label-style input-style-f62::placeholder"
                name="phone_number"
                onChange={handleChange}
                value={data.phone}
              />
            </div>
          </div>
        </div>
        <CompanyInputWidget {...data} onChange={handleChange} />
        <MessageDisplayBox {...data} onChange={handleChange} />
        {data.request_type === "product" && (
          <div className="sample-request-button1">
            <input
              type="checkbox"
              className="sample-request-button"
              checked={data.request_sample}
              onChange={() =>
                setData({ ...data, request_sample: !data.request_sample })
              }
            />
            <p className="sample-request-button-style">
              {messages["request_sample"]}
            </p>
          </div>
        )}
      </div>
      <button
        className="submit-button-style"
        onClick={handlesubmit}
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </>
  );
}

export default CustomerInformationForm;
