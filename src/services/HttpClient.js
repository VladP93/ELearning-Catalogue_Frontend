import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

axios.interceptors.request.use(
  (config) => {
    const sec_token = window.localStorage.getItem("sec_token");
    if (sec_token) {
      config.headers.Authorization = "Bearer " + sec_token;
      return config;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

const genericRequest = {
  get: (url) => axios.get(url),
  post: (url, body) => axios.post(url, body),
  put: (url, body) => axios.put(url, body),
  delete: (url) => axios.delete(url),
};

export default genericRequest;
