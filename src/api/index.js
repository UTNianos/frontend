import { create } from "apisauce";
import { identity } from "ramda";
// define the api
const api = create({
  baseURL: "/api/",
  headers: { Accept: "application/json" }
});

export const setToken = token => api.setHeader("Authorization", token);

export const dataOrNull = (selector = identity) => response =>
  response.ok ? selector(response.data) : null;
export default api;
