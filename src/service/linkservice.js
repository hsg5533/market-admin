import axios from "axios";
import config from "../json/config.json";

class qrservice {
  getLink() {
    return axios.get(config.host + "/getLink");
  }

  getLinkActive(status) {
    return axios({
      url: config.host + "/getLinkActive",
      method: "post",
      data: { status: status },
    });
  }

  qrSave(code) {
    return axios({
      url: config.host + "/qrsave",
      method: "post",
      data: { code: code },
    });
  }

  makeCode(num) {
    return axios({
      url: config.host + "/makecode",
      method: "post",
      data: { num: num },
    });
  }

  linkUpdate(code, storename, regnumber) {
    return axios({
      url: config.host + "/linkUpdate",
      method: "post",
      data: {
        code: code,
        storename: storename,
        regnumber: regnumber,
      },
    });
  }
}
export default new qrservice();
