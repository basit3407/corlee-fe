// src/config/api.js

import axios from "axios";

const api = axios.create({
  baseURL: "https://corleebackend-05d62e3e59f9.herokuapp.com/api",
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
