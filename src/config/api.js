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

export { api, setAuthToken };
