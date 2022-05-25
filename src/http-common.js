import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:10086",
  headers: {
    "Content-type": "application/json",
  },
});
