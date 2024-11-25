import React from "react";
import moment from "moment";
import Aside from "./Aside";
import Header from "./Header";
import Pagination from "./Pagination";
import inquiryservice from "../service/inquiryservice";

class ask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      limit: 2,
      word: "",
      field: "제목",
      inquirys: [],
      selects: [],
    };
  }

  componentDidMount() {
    inquiryservice.getInquiry().then((res) => {
      this.setState({ inquirys: res.data });
    });
  }

  search() {
    switch (this.state.field) {
      case "순번":
        return this.state.inquirys.filter((inquiry) =>
          inquiry.num.toString().toLowerCase().includes(this.state.word)
        );
      case "확인중":
        return this.state.inquirys.filter((inquiry) =>
          inquiry.reply.toLowerCase().includes("n")
        );
      case "답변완료":
        return this.state.inquirys.filter((inquiry) =>
          inquiry.reply.toLowerCase().includes("y")
        );
      case "제목":
        return this.state.inquirys.filter((inquiry) =>
          inquiry.title.toLowerCase().includes(this.state.word)
        );
      case "글쓴이":
        return this.state.inquirys.filter((inquiry) =>
          inquiry.writer.toLowerCase().includes(this.state.word)
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
                커뮤니티 - <span>문의관리</span>
              </h2>
              <ul>
                <li>
                  <a href="#">홈 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">커뮤니티 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">문의관리</a>
                </li>
              </ul>
            </div>
            <section className="sub_notice">
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
                            확인중
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={(event) => {
                              this.setState({ field: event.target.text });
                            }}
                          >
                            답변완료
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={(event) => {
                              this.setState({ field: event.target.text });
                            }}
                          >
                            제목
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={(event) => {
                              this.setState({ field: event.target.text });
                            }}
                          >
                            글쓴이
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
              </div>
              <div className="sub_ask_table sub_notice_table">
                <ul className="sub_page_num">
                  <li>
                    전체 {this.state.inquirys.length}건
                    <span>{this.state.page} 페이지</span>
                  </li>
                  <li className="common_set">
                    <a href="#">
                      <i className="icon_option_off"></i>
                      <ul>
                        <li>선택 삭제</li>
                        <li>선택 복사</li>
                        <li>선택 이동</li>
                      </ul>
                    </a>
                    <a href="#">
                      <i className="icon_option_on"></i>
                      <ul>
                        <li
                          onClick={() => {
                            for (let i in this.state.selects) {
                              inquiryservice
                                .deleteInquiry(this.state.selects[i].num)
                                .then(() => {});
                            }
                            alert("삭제완료");
                            window.location.reload();
                          }}
                        >
                          선택 삭제
                        </li>
                        <li>선택 복사</li>
                        <li>선택 이동</li>
                      </ul>
                    </a>
                  </li>
                </ul>
                <div className="tab_active sub_order_item">
                  <table className="sub_table_line">
                    <thead>
                      <tr>
                        <th className="inquiry_ck">
                          <label className="check_box">
                            <input type="checkbox" />
                            <span className="check_box_icon"></span>
                          </label>
                        </th>
                        <th>순번</th>
                        <th>상태</th>
                        <th>제목</th>
                        <th>글쓴이</th>
                        <th>날짜</th>
                      </tr>
                    </thead>
                    {this.search()
                      .slice(
                        (this.state.page - 1) * this.state.limit,
                        (this.state.page - 1) * this.state.limit +
                          this.state.limit
                      )
                      .map((inquiry) => (
                        <tbody>
                          <tr>
                            <td className="inquity_ck">
                              <label className="check_box">
                                <input
                                  id={`${inquiry.num}`}
                                  type="checkbox"
                                  checked={
                                    this.state.selects.includes(inquiry)
                                      ? true
                                      : false
                                  }
                                  onClick={() => {
                                    if (
                                      document.getElementById(`${inquiry.num}`)
                                        .checked
                                    ) {
                                      const select = this.state.inquirys.filter(
                                        (select) => select.num === inquiry.num
                                      );
                                      this.setState((prev) => ({
                                        selects: [...prev.selects, select[0]],
                                      }));
                                    } else {
                                      const cancle = this.state.selects.filter(
                                        (cancle) => cancle.num !== inquiry.num
                                      );
                                      this.setState({ selects: cancle });
                                    }
                                  }}
                                />
                                <span className="check_box_icon"></span>
                              </label>
                            </td>
                            <td>{inquiry.num}</td>
                            <td>
                              {inquiry.reply === "y" ? (
                                <p className="complete_label">답변 완료</p>
                              ) : (
                                <p className="check_label">확인 중</p>
                              )}
                            </td>
                            <td>
                              <span>
                                <a href={`/ask_post?num=${inquiry.num}`}>
                                  {inquiry.title}
                                </a>
                              </span>
                            </td>
                            <td>
                              <span>{inquiry.writer}</span>
                            </td>
                            <td>
                              {moment(inquiry.regdate).format(
                                "YYYY-MM-DD HH:mm:ss"
                              )}
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
export default ask;
