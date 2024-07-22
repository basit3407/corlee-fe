import React from "react";
import { Toaster } from "sonner";
import { setAuthToken } from "../config/api";
import { Outlet } from "react-router-dom";
const Token = () => {
  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }
  return (
    <>
      <Toaster position="bottom-left" closeButton />
      <Outlet />
    </>
  );
};

export default Token;
