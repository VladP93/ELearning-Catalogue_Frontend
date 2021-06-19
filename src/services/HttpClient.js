import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

const genericRequest = {
  get: (url) => axios.get(url),
  post: (url, body) => axios.post(url, body),
  put: (url, body) => axios.post(url, body),
  delete: (url) => axios.delete(url),
};

export default genericRequest;
