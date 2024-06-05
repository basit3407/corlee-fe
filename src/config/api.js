// src/config/api.js

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/",
});

const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Token ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

// Automatically add token to headers if it exists
const token = localStorage.getItem("token");
if (token) {
  setAuthToken(token);
}

export { api, setAuthToken };
