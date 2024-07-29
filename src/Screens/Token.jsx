import React, { useEffect } from "react";
import { Toaster } from "sonner";
import { api, setAuthToken } from "../config/api";
import { Outlet } from "react-router-dom";
const Token = () => {
  const token = localStorage.getItem("token");
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
  return (
    <>
      <Toaster position="bottom-left" closeButton />
      <Outlet />
    </>
  );
};

export default Token;
