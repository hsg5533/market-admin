import axios from "axios";
import config from "../json/config.json";

class productservice {
  getProduct() {
    return axios.get(config.host + "/getProduct");
  }

  getProductDetail(product_code) {
    return axios({
      url: config.host + "/getProductDetail",
      method: "post",
      data: { product_code: product_code },
    });
  }

  deleteProduct(product_code) {
    return axios.delete(config.host + "/deleteProduct/" + product_code);
  }
}
export default new productservice();
