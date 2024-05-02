import axios from "axios";

const imstance = axios.create({
  baseURL: "http://127.0.0.1:3000",
  timeout: 6000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
