import axios from "axios";
import config from "../json/config.json";

class noticeservice {
  getNotice() {
    return axios.get(config.host + "/getNotice");
  }

  hitNotice(num) {
    return axios({
      url: config.host + "/hitNotice",
      method: "post",
      data: { num: num },
    });
  }

  getNoticeDetail(num) {
    return axios({
      url: config.host + "/getNoticeDetail",
      method: "post",
      data: { num: num },
    });
  }

  deleteNotice(num) {
    return axios({
      url: config.host + "/deleteNotice",
      method: "delete",
      data: { num: num },
    });
  }
}
export default new noticeservice();
