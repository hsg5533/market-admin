import axios from "axios";
import config from "../json/config.json";

class storeservice {
  getStore() {
    return axios.get(config.host + "/getStore");
  }

  storeActive(boolean, code) {
    return axios({
      url: config.host + "/storeActive",
      method: "post",
      data: { boolean: boolean, code: code },
    });
  }

  getStoreCategory(category_code) {
    return axios({
      url: config.host + "/getStoreCategory",
      method: "post",
      data: { category_code: category_code },
    });
  }

  getStoreReg(regnumber) {
    return axios({
      url: config.host + "/getStoreReg",
      method: "post",
      data: { regnumber: regnumber },
    });
  }

  getStoreDetail(storecode) {
    return axios({
      url: config.host + "/getStoreDetail",
      method: "post",
      data: { storecode: storecode },
    });
  }

  getStoreInstall(category, install) {
    return axios({
      url: config.host + "/getStoreInstall",
      method: "post",
      data: {
        category: category,
        install: install,
      },
    });
  }

  getStoreControl(
    neLatitude,
    neLongitude,
    weLatitude,
    weLongitude,
    category,
    install
  ) {
    return axios({
      url: config.host + "/getStoreControl",
      method: "post",
      data: {
        neLatitude: neLatitude,
        neLongitude: neLongitude,
        weLatitude: weLatitude,
        weLongitude: weLongitude,
        category: category,
        install: install,
      },
    });
  }

  checkRegnumber(regnumber) {
    return axios({
      url: config.host + "/checkRegnumber",
      method: "post",
      data: {
        regnumber: regnumber,
      },
    });
  }

  storeRegist(
    regnumber,
    category_code,
    name,
    tel,
    owner,
    birthday,
    postcode,
    address,
    address_detail,
    phone,
    open,
    close,
    pause,
    resume,
    latitude,
    longitude,
    encode_png
  ) {
    return axios({
      url: config.host + "/storeRegist",
      method: "post",
      data: {
        regnumber: regnumber,
        category_code: category_code,
        name: name,
        tel: tel,
        owner: owner,
        birthday: birthday,
        postcode: postcode,
        address: address,
        address_detail: address_detail,
        phone: phone,
        open: open,
        close: close,
        pause: pause,
        resume: resume,
        latitude: latitude,
        longitude: longitude,
        encode_png: encode_png,
      },
    });
  }

  storeUpdate(
    regnumber,
    category_code,
    name,
    password,
    tel,
    owner,
    birthday,
    postcode,
    address,
    address_detail,
    phone,
    open,
    close,
    pause,
    resume,
    latitude,
    longitude
  ) {
    return axios({
      url: config.host + "/storeUpdate",
      method: "post",
      data: {
        regnumber: regnumber,
        category_code: category_code,
        name: name,
        password: password,
        tel: tel,
        owner: owner,
        birthday: birthday,
        postcode: postcode,
        address: address,
        address_detail: address_detail,
        phone: phone,
        open: open,
        close: close,
        pause: pause,
        resume: resume,
        latitude: latitude,
        longitude: longitude,
      },
    });
  }
}
export default new storeservice();
