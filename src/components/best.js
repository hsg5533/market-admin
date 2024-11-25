import React from "react";
import Aside from "./Aside";
import Header from "./Header";
import Pagination from "./Pagination";
import storeservice from "../service/storeservice";

class best extends React.Component {
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

  // 항목에 따른 검색
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
      <main>
        <Header />
        <Aside />
        <div className="container">
          <div className="sub_page">
            <div className="sub_common">
              <h2>추천 업소</h2>
              <ul>
                <li>
                  <a href="#">홈 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">추천 업소 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">추천 업소관리</a>
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
                        <a href="#">아이디</a>
                      </div>
                      <ul className="search_option">
                        <li>
                          <a href="#">아이디</a>
                        </li>
                        <li>
                          <a href="#">점주명</a>
                        </li>
                        <li>
                          <a href="#">전화번호</a>
                        </li>
                        <li>
                          <a href="#">휴대폰 번호</a>
                        </li>
                        <li>
                          <a href="#">가입일시</a>
                        </li>
                      </ul>
                    </li>
                    <li className="search_bar">
                      <input type="text" placeholder="검색어를 입력해주세요." />
                    </li>
                    <li className="btn_search">
                      <button>검색</button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sub_inquiry_card">
                <div className="inquiry_txt">
                  전체 목록 총 점포 수<span>{this.state.stores.length}</span>
                </div>
                <div className="sub_inquiry_item">
                  <table className="best_table">
                    <thead>
                      <tr>
                        <th rowSpan="2">점포명</th>
                        <th>점주명</th>
                        <th>사업자 번호</th>
                        <th>휴대폰 번호</th>
                        <th rowSpan="2">내역</th>
                      </tr>
                      <tr>
                        <th colSpan="3">주소</th>
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
                            <td rowSpan="2">
                              <span>{store.name}</span>
                            </td>
                            <td>{store.owner}</td>
                            <td className="inquiry_num">{store.regnumber}</td>
                            <td className="inquiry_num">{store.tel}</td>
                            <td rowSpan="2">
                              <div className="toggle">
                                <label className="toggler_wrap">
                                  <input type="checkbox" />
                                  <div className="toggler_slider">
                                    <div className="toggler_circle"></div>
                                  </div>
                                </label>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan="3">
                              {store.address}&nbsp;{store.address_detail}
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
      </main>
    );
  }
}
export default best;
