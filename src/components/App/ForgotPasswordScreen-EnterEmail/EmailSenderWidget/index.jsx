import EmailInputBox from "../EmailInputBox";
import "./style.css";
import messages from "./messages.json";
import { useState } from "react";
import { toast } from "sonner";
import { api } from "../../../../config/api";
import { useNavigate } from "react-router-dom";

function EmailSenderWidget() {
  const [inputvalue, setInputvalue] = useState("");
  const navigate = useNavigate();
  const sendReq = async () => {
    try {
      if (inputvalue === "") {
        toast.error("Enter your email address");
      } else {
        const res = await api.post("/password_reset/", {
          email: inputvalue,
        });
        if (res.status === 200) {
          navigate("/emailsent");
        } else {
          navigate("/noemail");
        }
      }
    } catch (e) {
      navigate("/noemail");
    }
  };

  return (
    <div className="center-aligned-button-container">
      <EmailInputBox inputvalue={inputvalue} setInputvalue={setInputvalue} />

      <button className="reset-link-button" onClick={sendReq}>
        {messages["send_reset_link"]}
      </button>
    </div>
  );
}

export default EmailSenderWidget;
