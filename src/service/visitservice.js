import axios from "axios";
import config from "../json/config.json";

class visitservice {
  getVisit() {
    return axios.get(config.host + "/getVisit");
  }

  getVisitToday(storecode) {
    return axios({
      url: config.host + "/getVisitToday",
      method: "post",
      data: { storecode: storecode },
    });
  }

  getVisiteMonth(month, storecode) {
    return axios({
      url: config.host + "/getVisitMonth",
      method: "post",
      data: {
        month: month,
        storecode: storecode,
      },
    });
  }

  async getVisitHour(hour) {
    return await axios({
      url: config.host + "/getVisitHour",
      method: "post",
      data: {
        hour: hour,
      },
    });
  }

  async getVisitDate(date, storecode) {
    return await axios({
      url: config.host + "/getVisitDate",
      method: "post",
      data: {
        date: date,
        storecode: storecode,
      },
    });
  }

  getVisitPlatform() {
    return axios({
      url: config.host + "/getVisitPlatform",
      method: "post",
    });
  }
}
export default new visitservice();
