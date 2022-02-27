import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-clone0072.herokuapp.com/",
});

export default instance;
