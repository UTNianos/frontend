import api, { dataOrNull } from "api";

export const authenticate = async (username, password) =>
  api
    .get(
      "/auth/jwt/token",
      {},
      {
        headers: {
          Authorization: `basic ${btoa(`${username}:${password}`)}`
        }
      }
    )
    .then(dataOrNull(response => response.data));

export const fetchUserData = async () =>
  api.get("/auth/me").then(dataOrNull(response => response.data));
