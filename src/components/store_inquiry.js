import React from "react";
import Aside from "./Aside";
import Header from "./Header";
import Pagination from "./Pagination";
import storeservice from "../service/storeservice";

class store_inquiry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      page: 1,
      limit: 5,
      word: "",
      field: "점포명",
    };
  }

  componentDidMount() {
    storeservice.getStore().then((res) => {
      this.setState({ stores: res.data });
    });
  }

  search() {
    switch (this.state.field) {
      case "아이디":
        return this.state.stores.filter((store) =>
          store.regnumber.toString().toLowerCase().includes(this.state.word)
        );
      case "점주명":
        return this.state.stores.filter((store) =>
          store.owner.toLowerCase().includes(this.state.word)
        );
      case "점포명":
        return this.state.stores.filter((store) =>
          store.name.toLowerCase().includes(this.state.word)
        );
      case "휴대폰":
        return this.state.stores.filter((store) =>
          store.phone.toLowerCase().includes(this.state.word)
        );
      case "주소":
        return this.state.stores.filter((store) =>
          store.address.toLowerCase().includes(this.state.word)
        );
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Aside />
        <div className="container">
          <div className="sub_page">
            <div className="sub_common">
              <h2>점포 조회</h2>
              <ul>
                <li>
                  <a href="#">홈 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">점포 관리 &nbsp; &gt; &nbsp; </a>
                </li>
                <li>
                  <a href="#">점포 조회</a>
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
            <section className="sub_store_inquiry">
              <div className="sub_inquiry_box">
                <div className="sub_store_search">
                  <ul>
                    <li className="search_option_box">
                      <div className="search_select">
                        <a href="#">{this.state.field}</a>
                      </div>
                      <ul className="search_option">
                        <li>
                          <a
                            onClick={(event) => {
                              this.setState({ field: event.target.text });
                            }}
                          >
                            아이디
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={(event) => {
                              this.setState({ field: event.target.text });
                            }}
                          >
                            점주명
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={(event) => {
                              this.setState({ field: event.target.text });
                            }}
                          >
                            점포명
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={(event) => {
                              this.setState({ field: event.target.text });
                            }}
                          >
                            휴대폰
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={(event) => {
                              this.setState({ field: event.target.text });
                            }}
                          >
                            주소
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="search_bar">
                      <input
                        type="text"
                        placeholder="검색어를 입력해주세요."
                        onChange={(event) => {
                          this.setState({ word: event.target.value });
                        }}
                      />
                    </li>
                    <li className="notification">
                      ※검색어를 입력하면 자동으로 검색됩니다.
                    </li>
                  </ul>
                </div>
                <div className="sub_store_set">
                  <div>
                    <i className="icon_plus"></i>
                    <a href="/store_rg">점포 추가 등록</a>
                  </div>
                </div>
              </div>
              <div className="sub_inquiry_card">
                <div className="inquiry_txt">
                  전체 목록 총 점포 수<span>{this.state.stores.length}</span>
                </div>
                <div className="sub_inquiry_item">
                  <table>
                    <thead>
                      <tr>
                        <th className="inquiry_ck" rowSpan="2">
                          <label className="check_box">
                            <input type="checkbox" />
                            <span className="check_box_icon"></span>
                          </label>
                        </th>
                        <th rowSpan="2">점포명</th>
                        <th>아이디</th>
                        <th>점주명</th>
                        <th>설치일</th>
                        <th>설치자</th>
                        <th>설치관리</th>
                        <th>상태</th>
                        <th>내역</th>
                        <th>관리</th>
                      </tr>
                      <tr>
                        <th>휴대폰</th>
                        <th colSpan="4">주소</th>
                        <th colSpan="3">이용 상태</th>
                      </tr>
                    </thead>
                    {this.search()
                      .slice(
                        (this.state.page - 1) * this.state.limit,
                        (this.state.page - 1) * this.state.limit +
                          this.state.limit
                      )
                      .map((store) => (
                        <tbody>
                          <tr>
                            <td rowSpan="2" className="inquity_ck">
                              <label className="check_box">
                                <input type="checkbox" />
                                <span className="check_box_icon"></span>
                              </label>
                            </td>
                            <td rowSpan="2">{store.name}</td>
                            <td className="inquiry_num">{store.regnumber}</td>
                            <td>{store.owner}</td>
                            <td className="inquiry_num">
                              2022-10-22
                              <br />
                              17:12:41
                            </td>
                            <td className="inquiry_disabled">
                              {store.installer}
                            </td>
                            <td>
                              <div className="search_option_box">
                                <div className="search_select">
                                  <a href="#">선택</a>
                                </div>
                                <ul className="search_option">
                                  <li>
                                    <a href="#">김가게(zxcv)</a>
                                  </li>
                                  <li>
                                    <a href="#">나설치(abcd)</a>
                                  </li>
                                  <li>
                                    <a href="#">다나와(zxcv)</a>
                                  </li>
                                  <li>
                                    <a href="#">테이블맨(tableman)</a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                            <td rowSpan="2" id="uninstall">
                              미설치
                            </td>
                            <td>
                              <div className="inquiry_detail">
                                <a
                                  href={`/store_detail?regnumber=${store.regnumber}`}
                                >
                                  상세
                                </a>
                              </div>
                            </td>
                            <td>
                              <div className="inquiry_edit">
                                <a
                                  href={`/store_edit?regnumber=${store.regnumber}`}
                                >
                                  수정
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="inquiry_num">{store.phone}</td>
                            <td colSpan="4">{store.address}</td>
                            <td colSpan="2">
                              <div className="toggle">
                                <label class="toggler_wrap">
                                  <input
                                    type="checkbox"
                                    checked={
                                      store.active === "y" ? true : false
                                    }
                                    onClick={(event) => {
                                      storeservice
                                        .storeActive(
                                          event.target.checked,
                                          store.code
                                        )
                                        .then(() => {
                                          storeservice
                                            .getStore()
                                            .then((res) => {
                                              this.setState({
                                                stores: res.data,
                                              });
                                            });
                                        });
                                    }}
                                  />
                                  <div class="toggler_slider">
                                    <div class="toggler_circle"></div>
                                  </div>
                                </label>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      ))}
                  </table>
                </div>
              </div>
              <Pagination
                total={this.search().length}
                limit={this.state.limit}
                page={this.state.page}
                setPage={(page) => {
                  this.setState({ page: page });
                }}
              />
            </section>
          </div>
        </div>
      </div>
    );
  }
}
export default store_inquiry;
