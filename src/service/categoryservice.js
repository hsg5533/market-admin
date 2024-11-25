import axios from "axios";
import config from "../json/config.json";

class categoryservice {
  getCategory() {
    return axios.get(config.host + "/getCategory");
  }

  categoryActive(boolean, code) {
    return axios({
      url: config.host + "/CategoryActive",
      method: "post",
      data: { boolean: boolean, code: code },
    });
  }

  getCategoryDetail(category_code) {
    return axios({
      url: config.host + "/getCategoryDetail",
      method: "post",
      data: { category_code: category_code },
    });
  }

  deleteCategory(category_code) {
    return axios({
      url: config.host + "/deleteCategory",
      method: "delete",
      data: { category_code: category_code },
    });
  }
}
export default new categoryservice();
