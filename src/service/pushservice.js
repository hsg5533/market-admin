import axios from "axios";
import config from "../json/config.json";

class pushservice {
  getToken() {
    return axios.get(config.host + "/getToken");
  }
  sendPushNotification(token) {
    return axios({
      url: config.host + "/sendPushNotification",
      method: "post",
      data: {
        token: token,
        title: "알림",
        message: "공지사항이 등록되었습니다",
      },
    });
  }
}
export default new pushservice();
