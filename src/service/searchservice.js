import axios from "axios";
import config from "../json/config.json";

class searchservice {
  getSearch() {
    return axios.get(config.host + "/getSearch");
  }
}
export default new searchservice();
