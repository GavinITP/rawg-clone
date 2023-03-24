import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "93e9176bcf054bbaa6e015c493016a96",
  },
});
