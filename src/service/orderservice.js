import axios from "axios";
import config from "../json/config.json";

class orderservice {
  getOrder() {
    return axios.get(config.host + "/getOrder");
  }

  getOrderProduct() {
    return axios.get(config.host + "/getOrderProduct");
  }

  getOrderStore() {
    return axios.get(config.host + "/getOrderStore");
  }

  getOrderStoreDetail(storename) {
    return axios({
      url: config.host + "/getOrderStoreDetail",
      method: "post",
      data: { storename: storename },
    });
  }

  getOrderProductStore(storename) {
    return axios({
      url: config.host + "/getOrderProductStore",
      method: "post",
      data: { storename: storename },
    });
  }

  getOrderDetail(orderid) {
    return axios({
      url: config.host + "/getOrderDetail",
      method: "post",
      data: { orderid: orderid },
    });
  }

  getOrderProductDetail(orderid) {
    return axios({
      url: config.host + "/getOrderProductDetail",
      method: "post",
      data: { orderid: orderid },
    });
  }

  orderPrice(orderid) {
    return axios({
      url: config.host + "/orderPrice",
      method: "post",
      data: { orderid: orderid },
    });
  }

  orderPriceStore(storename) {
    return axios({
      url: config.host + "/orderPriceStore",
      method: "post",
      data: { storename: storename },
    });
  }
}
export default new orderservice();
