import axios from "axios";

const api = axios.create({
  baseURL: "https://student-backend-by-nicolasnsc.herokuapp.com",
});

export default api;
