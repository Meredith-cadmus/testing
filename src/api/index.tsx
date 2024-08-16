import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://dummyjson.com/",
});

export const headerJson = () => ({
  "content-type": "application/json",
});
