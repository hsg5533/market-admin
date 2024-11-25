import React from "react";
import Aside from "./Aside";
import Header from "./Header";
import Pagination from "./Pagination";
import storeservice from "../service/storeservice";

class cont_main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      limit: 5,
      word: "",
      field: "점포명",
      stores: [],
      selects: [],
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
      case "점포명":
        return this.state.stores.filter((store) =>
          store.name.toLowerCase().includes(this.state.word)
        );
      case "설명":
        return this.state.stores.filter((store) =>
          store.explan.toLowerCase().includes(this.state.word)
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
              <h2>
                컨텐츠 관리 - <span>메인이미지/소개</span>
              </h2>
              <ul>
                <li>
                  <a href="#">홈 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">컨텐츠 관리 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">메인이미지/소개</a>
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
            <section className="sub_contents sub_notice">
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
                            점포명
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={(event) => {
                              this.setState({ field: event.target.text });
                            }}
                          >
                            설명
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
                <div className="delete_btn">
                  <button>
                    <i className="icon_delete_close"></i>선택 삭제
                  </button>
                </div>
              </div>
              <div className="sub_cont_table sub_notice_table">
                <div className="tab_active sub_order_item">
                  <table className="sub_cont_card">
                    <thead>
                      <tr>
                        <th className="inquiry_ck">
                          <label className="check_box">
                            <input type="checkbox" />
                            <span className="check_box_icon"></span>
                          </label>
                        </th>
                        <th>아이디</th>
                        <th>점포명</th>
                        <th>설명</th>
                        <th>등록일</th>
                        <th>수정일</th>
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
                            <td className="inquity_ck">
                              <label className="check_box">
                                <input
                                  type="checkbox"
                                  id={`${store.code}`}
                                  checked={
                                    this.state.selects.includes(store)
                                      ? true
                                      : false
                                  }
                                  onClick={() => {
                                    if (
                                      document.getElementById(`${store.code}`)
                                        .checked
                                    ) {
                                      const select = this.state.stores.filter(
                                        (select) => select.code === store.code
                                      );
                                      this.setState((prev) => ({
                                        selects: [...prev.selects, select[0]],
                                      }));
                                    } else {
                                      const cancle = this.state.selects.filter(
                                        (cancle) => cancle.code !== store.code
                                      );
                                      this.setState({ selects: cancle });
                                    }
                                  }}
                                />
                                <span className="check_box_icon"></span>
                              </label>
                            </td>
                            <td>
                              <a href="/store_inquiry">{store.regnumber}</a>
                            </td>
                            <td>
                              <span>{store.name}</span>
                            </td>
                            <td>
                              <span>
                                <a
                                  href={`/cont_main_menu?regnumber=${store.regnumber}`}
                                >
                                  {store.explan || "-"}
                                </a>
                              </span>
                            </td>
                            <td>22-09-22 17:37:45</td>
                            <td>22-09-23 11:34:54</td>
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
export default cont_main;
