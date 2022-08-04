import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.api-futebol.com.br/v1",
  headers: {
    Authorization: "Bearer test_5ef092a1db179089fa198727b77d19",
  },
});
