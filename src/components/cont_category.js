import React from "react";
import moment from "moment";
import Aside from "./Aside";
import Header from "./Header";
import Pagination from "./Pagination";
import config from "../json/config.json";
import categoryservice from "../service/categoryservice";

class cont_category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      limit: 10,
      word: "",
      field: "카테고리",
      categories: [],
      selects: [],
    };
  }

  componentDidMount() {
    categoryservice.getCategory().then((res) => {
      this.setState({ categories: res.data });
    });
  }

  search() {
    switch (this.state.field) {
      case "순번":
        return this.state.categories.filter((category) =>
          category.code.toString().toLowerCase().includes(this.state.word)
        );
      case "카테고리":
        return this.state.categories.filter((category) =>
          category.name.toLowerCase().includes(this.state.word)
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
                컨텐츠 관리 - <span>카테고리 관리</span>
              </h2>
              <ul>
                <li>
                  <a href="#">홈 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">컨텐츠 관리 &nbsp; &gt; &nbsp; </a>
                </li>
                <li>
                  <a href="#">카테고리 관리</a>
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
            <section className="sub_category sub_notice">
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
                            순번
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={(event) => {
                              this.setState({ field: event.target.text });
                            }}
                          >
                            카테고리
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
                <ul className="category_btn">
                  <li className="delete_btn">
                    <button
                      onClick={() => {
                        for (let i = 0; i < this.state.selects.length; i++) {
                          categoryservice
                            .deleteCategory(this.state.selects[i].code)
                            .then(() => {});
                        }
                        alert("삭제완료");
                        window.location.reload();
                      }}
                    >
                      <i className="icon_delete_close"></i>선택 삭제
                    </button>
                  </li>
                  <li className="sub_store_set">
                    <div>
                      <i className="icon_plus"></i>
                      <a href="/cont_cg_add">카테고리 추가</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="sub_cg_table sub_notice_table">
                <div className="tab_active sub_order_item">
                  <table className="category_item">
                    <thead>
                      <tr>
                        <th className="inquiry_ck">
                          <label className="check_box">
                            <input id="selectAll" type="checkbox" />
                            <span className="check_box_icon"></span>
                          </label>
                        </th>
                        <th>순번</th>
                        <th>아이콘</th>
                        <th>카테고리</th>
                        <th>사용 여부</th>
                        <th>등록일</th>
                        <th>관리</th>
                      </tr>
                    </thead>
                    {this.search()
                      .slice(
                        (this.state.page - 1) * this.state.limit,
                        (this.state.page - 1) * this.state.limit +
                          this.state.limit
                      )
                      .map((category) => (
                        <tbody>
                          <tr>
                            <td className="inquity_ck">
                              <label className="check_box">
                                <input
                                  id={`${category.code}`}
                                  className="check_box_icon"
                                  type="checkbox"
                                  checked={
                                    this.state.selects.includes(category)
                                      ? true
                                      : false
                                  }
                                  onClick={() => {
                                    if (
                                      document.getElementById(
                                        `${category.code}`
                                      ).checked
                                    ) {
                                      const select =
                                        this.state.categories.filter(
                                          (select) =>
                                            select.code === category.code
                                        );
                                      this.setState((prev) => ({
                                        selects: [...prev.selects, select[0]],
                                      }));
                                    } else {
                                      const cancle = this.state.selects.filter(
                                        (cancle) =>
                                          cancle.code !== category.code
                                      );
                                      this.setState({ selects: cancle });
                                    }
                                  }}
                                />
                                <span className="check_box_icon" />
                              </label>
                            </td>
                            <td>{category.code}</td>
                            <td>
                              <img
                                style={{ width: "32px", height: "32px" }}
                                src={
                                  config.host +
                                  `/getCategoryImg/${category.code}`
                                }
                                onError={(event) => {
                                  event.target.src = require("../resource/img/icon/no_img.png");
                                }}
                              />
                            </td>
                            <td>{category.name}</td>
                            <td>
                              <div className="toggle">
                                <label class="toggler_wrap">
                                  <input
                                    type="checkbox"
                                    checked={
                                      category.active === "y" ? true : false
                                    }
                                    onClick={(event) => {
                                      categoryservice
                                        .categoryActive(
                                          event.target.checked,
                                          category.code
                                        )
                                        .then(() => {
                                          categoryservice
                                            .getCategory()
                                            .then((res) => {
                                              this.setState({
                                                categories: res.data,
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
                            <td>
                              {moment(category.regdate).format(
                                "YYYY-MM-DD a hh:mm:ss"
                              )}
                            </td>
                            <td>
                              <div className="inquiry_detail">
                                <a
                                  href={`/cont_cg_set?category=${category.code}`}
                                >
                                  수정
                                </a>
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
      </main>
    );
  }
}
export default cont_category;
