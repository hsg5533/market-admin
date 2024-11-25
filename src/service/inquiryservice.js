import axios from "axios";
import config from "../json/config.json";

class inquiryservice {
  getInquiry() {
    return axios.get(config.host + "/getInquiry");
  }

  getInquiryDetail(num) {
    return axios({
      url: config.host + "/getInquiryDetail",
      method: "post",
      data: { num: num },
    });
  }

  inquiryReply(num, writer, content) {
    return axios({
      url: config.host + "/inquiryReply",
      method: "post",
      data: {
        num: num,
        writer: writer,
        content: content,
      },
    });
  }

  getInquiryReply(num) {
    return axios({
      url: config.host + "/getInquiryReply",
      method: "post",
      data: { num: num },
    });
  }

  getReplyCount(num) {
    return axios({
      url: config.host + "/getReplyCount",
      method: "post",
      data: { num: num },
    });
  }

  deleteInquiry(num) {
    return axios({
      url: config.host + "/deleteInquiry",
      method: "delete",
      data: { num: num },
    });
  }
}
export default new inquiryservice();
