import axios from "axios";
import store from "../store/config/store-config";

const axiosApi = axios.create({
  baseURL: "http://localhost:3000",
});

axiosApi.interceptors.request.use((config) => {
  try {
    config.headers["Authorization"] = store.getState().users.user.token;
  } catch (e) {
    // do nothing, no token exists
  }
  return config;
});

export default axiosApi;
