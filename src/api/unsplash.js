import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 748626ce3988969f8f2eabefb60cfacc753509780b5752307f74218d2ed6a8bb"
  }
});
