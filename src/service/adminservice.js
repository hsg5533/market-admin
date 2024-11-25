import axios from "axios";
import config from "../json/config.json";

class adminservice {
  login(id, password) {
    return axios({
      url: config.host + "/adminLogin",
      method: "post",
      data: {
        id: id,
        password: password,
      },
    });
  }
}
export default new adminservice();
