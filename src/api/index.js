import { create } from "apisauce";

// define the api
const api = create({
  baseURL: "https://api.github.com",
  headers: { Accept: "application/json" }
});

export const setToken = token => api.setHeader("Authorization", token);

export default api;
