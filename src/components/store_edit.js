import React from "react";
import Aside from "./Aside";
import Header from "./Header";
import queryString from "query-string";
import config from "../json/config.json";
import storeservice from "../service/storeservice";
import DaumPostcodeEmbed from "react-daum-postcode";
import categoryservice from "../service/categoryservice";

class store_edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      regnumber: queryString.parse(window.location.search).regnumber,
      category_code: "",
      name: "",
      password: "",
      tel: "",
      owner: "",
      birthday: "",
      postcode: "",
      address: "",
      address_detail: "",
      phone: "",
      open: "",
      close: "",
      pause: "",
      resume: "",
      latitude: "",
      longitude: "",
      isOpenPost: false,
      categories: [],
      hour: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
      ],
    };
  }

  componentDidMount() {
    categoryservice.getCategory().then((res) => {
      this.setState({ categories: res.data });
    });
    storeservice.getStoreReg(this.state.regnumber).then((res) => {
      this.setState({
        category_code: res.data.category_code,
        name: res.data.name,
        tel: res.data.tel,
        owner: res.data.owner,
        birthday: res.data.birthday,
        postcode: res.data.postcode,
        address: res.data.address,
        address_detail: res.data.address_detail,
        phone: res.data.phone,
        open: res.data.open,
        close: res.data.close,
        pause: res.data.pause,
        resume: res.data.resume,
        latitude: res.data.latitude,
        longitude: res.data.longitude,
      });
    });
  }

  Postcode() {
    const { kakao } = window;
    const geocoder = new kakao.maps.services.Geocoder();
    const callback = (lat, lng) => {
      this.setState({
        latitude: lat,
        longitude: lng,
      });
    };
    return (
      <DaumPostcodeEmbed
        onComplete={(data) => {
          this.setState({ postcode: data.zonecode, address: data.address });
          geocoder.addressSearch(data.address, function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
              callback(result[0].y, result[0].x);
            }
          });
        }}
      />
    );
  }

  render() {
    return (
      <main>
        <Header />
        <Aside />
        <div className="container">
          <div className="sub_page">
            <div className="sub_common">
              <h2>점포 수정</h2>
              <ul>
                <li>
                  <a href="#">홈 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">점포 관리 &nbsp; &gt; &nbsp; </a>
                </li>
                <li>
                  <a href="#">점포 수정</a>
                </li>
                <li className="common_set">
                  <a href="#">
                    <i className="icon_set_off"></i>
                    <div>초기화</div>
                  </a>
                  <a href="#">
                    <i className="icon_set_on"></i>
                    <div>초기화</div>
                  </a>
                </li>
              </ul>
            </div>
            <section className="sub_store_edit sub_store">
              <div className="sub_common_tit">
                <h3>점포 정보</h3>
              </div>
              <div className="sub_store_infor">
                <div className="sub_store_cont">
                  <ul>
                    <li className="sub_infor_tit">
                      <h3>
                        사업자 등록번호 / 휴대전화 <em>*</em>
                      </h3>
                    </li>
                    <li className="sub_store_txt">
                      <div>
                        <input
                          className="inquiry_num"
                          type="text"
                          value={this.state.regnumber}
                          disabled
                        />
                      </div>
                    </li>
                  </ul>
                  <ul>
                    <li className="sub_infor_tit">
                      <h3>
                        비밀번호 <em>*</em>
                        <em className="em_txt">비밀번호 변경 시 입력하세요.</em>
                      </h3>
                    </li>
                    <li className="sub_store_txt">
                      <div>
                        <input
                          type="text"
                          onChange={(event) => {
                            this.setState({ password: event.target.value });
                          }}
                        />
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="sub_store_card">
                  <div className="sub_infor_tit">
                    <h3>
                      카테고리
                      <span>카테고리는 3개까지 선택 가능합니다.</span>
                    </h3>
                  </div>
                  <ul className="sub_store_cg">
                    {this.state.categories.map((category) => (
                      <li>
                        <a
                          style={{
                            backgroundColor:
                              this.state.category_code === category.code
                                ? "#ebf8f8"
                                : "",
                            color:
                              this.state.category_code === category.code
                                ? "#00a8b9"
                                : "",
                          }}
                          onClick={() => {
                            this.setState({ category_code: category.code });
                          }}
                        >
                          {category.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sub_store_box">
                  <div className="sub_store_card">
                    <div className="sub_infor_tit">
                      <h3>
                        검색어 <span>키워드는 , (콤마)로 구분합니다.</span>
                      </h3>
                    </div>
                    <div>
                      <div>
                        <input
                          type="text"
                          placeholder="참기름, 들기름, 엿기름"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sub_store_cont">
                    <ul>
                      <li className="sub_infor_tit">
                        <h3>
                          가맹점명 <em>*</em>
                        </h3>
                      </li>
                      <li className="sub_store_txt">
                        <div>
                          <input
                            type="text"
                            value={this.state.name}
                            onChange={(event) => {
                              this.setState({ name: event.target.value });
                            }}
                          />
                        </div>
                      </li>
                    </ul>
                    <ul>
                      <li className="sub_infor_tit">
                        <h3>
                          가맹점 전화번호 <em>*</em>
                        </h3>
                      </li>
                      <li className="sub_store_txt">
                        <div>
                          <input
                            className="inquiry_num"
                            type="text"
                            value={this.state.tel}
                            onChange={(event) => {
                              this.setState({ tel: event.target.value });
                            }}
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="sub_store_cont">
                    <ul>
                      <li className="sub_infor_tit">
                        <h3>
                          대표자명 <em>*</em>
                        </h3>
                      </li>
                      <li className="sub_store_txt">
                        <div>
                          <input
                            type="text"
                            value={this.state.owner}
                            onChange={(event) => {
                              this.setState({ owner: event.target.value });
                            }}
                          />
                        </div>
                      </li>
                    </ul>
                    <ul>
                      <li className="sub_infor_tit">
                        <h3>생년월일</h3>
                      </li>
                      <li className="sub_store_txt">
                        <div>
                          <input
                            type="text"
                            value={this.state.birthday}
                            onChange={(event) => {
                              this.setState({ birthday: event.target.value });
                            }}
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="sub_store_cont">
                    <ul>
                      <li className="sub_infor_tit">
                        <h3>연락처</h3>
                      </li>
                      <li className="sub_store_txt">
                        <div>
                          <input
                            className="inquiry_num"
                            type="text"
                            value={this.state.phone}
                            onChange={(event) => {
                              this.setState({ phone: event.target.value });
                            }}
                          />
                        </div>
                      </li>
                    </ul>
                    <ul>
                      <li className="sub_infor_tit">
                        <h3>태그 갯수( 테이블 수 )</h3>
                      </li>
                      <li className="sub_store_txt">
                        <div>
                          <input type="text" />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="sub_store_cont">
                    <ul>
                      <li className="sub_infor_tit">
                        <h3>영업시간</h3>
                      </li>
                      <li className="sub_store_txt">
                        <ul className="sub_store_cont">
                          <li>
                            <div className="fh_time">
                              <select
                                id="open"
                                onChange={(event) => {
                                  this.setState({ open: event.target.value });
                                }}
                              >
                                <option value="" selected>
                                  선택
                                </option>
                                {this.state.hour.map((hour) => (
                                  <option
                                    value={`${hour}시`}
                                    selected={
                                      this.state.open === `${hour}시`
                                        ? true
                                        : false
                                    }
                                  >
                                    {hour}시
                                  </option>
                                ))}
                              </select>
                            </div>
                            <span>부터</span>
                          </li>
                          <li>
                            <div className="fh_time">
                              <select
                                id="close"
                                onChange={(event) => {
                                  this.setState({ close: event.target.value });
                                }}
                              >
                                <option value="" selected>
                                  선택
                                </option>
                                {this.state.hour.map((hour) => (
                                  <option
                                    value={`${hour}시`}
                                    selected={
                                      this.state.close === `${hour}시`
                                        ? true
                                        : false
                                    }
                                  >
                                    {hour}시
                                  </option>
                                ))}
                              </select>
                            </div>
                            <span>까지</span>
                          </li>
                          <li>
                            <div className="contract_ck">
                              <label className="check_box">
                                <input
                                  type="checkbox"
                                  onClick={(event) => {
                                    if (event.target.checked) {
                                      document.getElementById(
                                        "open"
                                      ).disabled = true;
                                      document.getElementById(
                                        "close"
                                      ).disabled = true;
                                      this.setState({
                                        open: "0시",
                                        close: "24시",
                                      });
                                    } else {
                                      document.getElementById(
                                        "open"
                                      ).disabled = false;
                                      document.getElementById(
                                        "close"
                                      ).disabled = false;
                                      this.setState({
                                        open: this.state.open,
                                        close: this.state.close,
                                      });
                                    }
                                  }}
                                />
                                <span className="check_box_icon"></span>
                                <span className="check_box_txt">
                                  24시간 영업
                                </span>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <ul>
                      <li className="sub_infor_tit">
                        <h3>브레이크 타임</h3>
                      </li>
                      <li className="sub_store_txt">
                        <ul className="sub_store_cont">
                          <li>
                            <div className="fh_time">
                              <select
                                id="pause"
                                onChange={(event) => {
                                  this.setState({ pause: event.target.value });
                                }}
                              >
                                <option value="-" selected>
                                  선택
                                </option>
                                {this.state.hour.map((hour) => (
                                  <option
                                    value={`${hour}시`}
                                    selected={
                                      this.state.pause === `${hour}시`
                                        ? true
                                        : false
                                    }
                                  >
                                    {hour}시
                                  </option>
                                ))}
                              </select>
                            </div>
                            <span>부터</span>
                          </li>
                          <li>
                            <div className="fh_time">
                              <select
                                id="resume"
                                onChange={(event) => {
                                  this.setState({ resume: event.target.value });
                                }}
                              >
                                <option value="-" selected>
                                  선택
                                </option>
                                {this.state.hour.map((hour) => (
                                  <option
                                    value={`${hour}시`}
                                    selected={
                                      this.state.resume === `${hour}시`
                                        ? true
                                        : false
                                    }
                                  >
                                    {hour}시
                                  </option>
                                ))}
                              </select>
                            </div>
                            <span>까지</span>
                          </li>
                          <li>
                            <div className="contract_ck">
                              <label className="check_box">
                                <input
                                  type="checkbox"
                                  onClick={(event) => {
                                    if (event.target.checked) {
                                      document.getElementById(
                                        "pause"
                                      ).disabled = true;
                                      document.getElementById(
                                        "resume"
                                      ).disabled = true;
                                      this.setState({
                                        pause: "-",
                                        resume: "-",
                                      });
                                    } else {
                                      document.getElementById(
                                        "pause"
                                      ).disabled = false;
                                      document.getElementById(
                                        "resume"
                                      ).disabled = false;
                                      this.setState({
                                        pause: this.state.pause,
                                        resume: this.state.resume,
                                      });
                                    }
                                  }}
                                />
                                <span className="check_box_icon"></span>
                                <span className="check_box_txt">
                                  브레이크 타임 없음
                                </span>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sub_store_card">
                  <div className="sub_infor_tit">
                    <h3>
                      주소 <em>*</em>
                    </h3>
                  </div>
                  <ul className="sub_store_txt">
                    <li>
                      <input
                        className="inquiry_num"
                        type="text"
                        value={this.state.postcode}
                        disabled
                      />
                    </li>
                    <li className="infor_btn">
                      <button
                        onClick={() => {
                          this.setState({
                            isOpenPost: !this.state.isOpenPost,
                          });
                        }}
                      >
                        주소 검색
                      </button>
                    </li>
                  </ul>
                  <ul>
                    <li>{this.state.isOpenPost ? this.Postcode() : null}</li>
                  </ul>
                  <ul className="address_txt">
                    <li>
                      <input type="text" value={this.state.address} disabled />
                    </li>
                    <li>
                      <input
                        type="text"
                        value={this.state.address_detail}
                        disabled
                      />
                    </li>
                  </ul>
                </div>
                <div className="sub_store_card">
                  <div className="sub_infor_tit">
                    <h3>
                      주소 좌표
                      <span>좌표(위도/경도)는 주소 검색 시 자동 입력</span>
                    </h3>
                  </div>
                  <ul className="sub_store_cont">
                    <li className="mr_16">
                      <input
                        className="inquiry_num"
                        type="text"
                        value={this.state.latitude}
                        disabled
                      />
                    </li>
                    <li>
                      <input
                        className="inquiry_num"
                        type="text"
                        value={this.state.longitude}
                        disabled
                      />
                    </li>
                  </ul>
                </div>
                <div className="contract">
                  <div className="contract_tit">
                    <h3>계약사항</h3>
                  </div>
                  <div className="contract_txt">
                    <div className="terms">
                      <h3>계약 내용 및 약관</h3>
                      <ul>
                        <li>
                          <label className="check_box">
                            <input type="checkbox" />
                            <span className="check_box_icon"></span>
                            <span className="check_box_txt">
                              계약내용 및 약관에 동의합니다.
                            </span>
                          </label>
                        </li>
                        <li className="infor_btn">
                          <button>전문보기</button>
                        </li>
                      </ul>
                    </div>
                    <div className="signature">
                      <h3>서명</h3>
                      <div>
                        <img
                          src={
                            config.host +
                            `/getStoreSign/${
                              queryString.parse(window.location.search)
                                .regnumber
                            }`
                          }
                          alt="서명"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sub_btn">
                <button
                  onClick={() => {
                    storeservice
                      .storeUpdate(
                        this.state.regnumber,
                        this.state.category_code,
                        this.state.name,
                        this.state.password,
                        this.state.tel,
                        this.state.owner,
                        this.state.birthday,
                        this.state.postcode,
                        this.state.address,
                        this.state.address_detail,
                        this.state.phone,
                        this.state.open,
                        this.state.close,
                        this.state.pause,
                        this.state.resume,
                        this.state.latitude,
                        this.state.longitude
                      )
                      .then(() => {
                        alert("수정되었습니다.");
                        window.location.href = "/store_inquiry";
                      });
                  }}
                >
                  수정 완료
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    );
  }
}
export default store_edit;
