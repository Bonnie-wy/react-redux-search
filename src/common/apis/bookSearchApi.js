import axios from "axios";

export default axios.create({
  baseURL: "https://reststop.randomhouse.com",
  headers: {
    Accept: "application/json",
  },
});
