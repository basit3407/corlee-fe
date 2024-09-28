import React, { useEffect, useState } from "react";
import { Toaster } from "sonner";
import { api, setAuthToken } from "../config/api";
import { Outlet, useNavigate } from "react-router-dom";
const Token = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  if (token) {
    setAuthToken(token);
  }

  const getinfo = async () => {
    const response = await api.get("/contact-details/");
    if (response.status === 200) {
      localStorage.setItem("whatsapp", response.data.whatsapp);
      localStorage.setItem("postal_code", response.data.postal_code);
      localStorage.setItem("phone", response.data.phone);
      localStorage.setItem("longitude", response.data.longitude);
      localStorage.setItem("line", response.data.line);
      localStorage.setItem("latitude", response.data.latitude);
      localStorage.setItem("instagram", response.data.instagram);
      localStorage.setItem("facebook", response.data.facebook);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("country", response.data.country);
      localStorage.setItem("address", response.data.address);
    }
  };
  useEffect(() => {
    getinfo();
  }, []);
  const [emailNotVerified, setEmailNotVerified] = useState(false);

  const getUser = async () => {
    if (localStorage.getItem("token")) {
      const res = await api.get("/user/");
      if (res.status === 200) {
        if (!res.data.is_verified) {
          setEmailNotVerified(true);
        }
        if (!res.data.company_name) {
          navigate("/addCompanyDetails");
          localStorage.setItem("Company", "false");
        } else {
          localStorage.setItem("Company", "true");
        }
      }
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getUser();
  }, []);

  return (
    <>
      <Toaster position="bottom-left" closeButton />
      {emailNotVerified && (
        <div className="noemailband">Verify your email address.</div>
      )}
      <Outlet />
    </>
  );
};

export default Token;
