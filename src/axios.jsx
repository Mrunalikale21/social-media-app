import axios from "axios";

export const makeRequest = axios.create({
  baseUrL:"http://localhost:8800/api/",
  withCredentials: true,
})
