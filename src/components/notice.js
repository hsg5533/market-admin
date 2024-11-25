import React from "react";
import moment from "moment";
import Aside from "./Aside";
import Header from "./Header";
import Pagination from "./Pagination";
import noticeservice from "../service/noticeservice";

class notice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      limit: 5,
      word: "",
      field: "제목",
      notices: [],
      selects: [],
    };
  }

  componentDidMount() {
    noticeservice.getNotice().then((res) => {
      this.setState({ notices: res.data });
    });
  }

  search() {
    switch (this.state.field) {
      case "번호":
        return this.state.notices.filter((notice) =>
          notice.num.toLowerCase().includes(this.state.word)
        );
      case "제목":
        return this.state.notices.filter((notice) =>
          notice.title.toLowerCase().includes(this.state.word)
        );
      case "글쓴이":
        return this.state.notices.filter((notice) =>
          notice.writer.toLowerCase().includes(this.state.word)
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
                커뮤니티 - <span>공지사항</span>
              </h2>
              <ul>
                <li>
                  <a href="#">홈 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">커뮤니티 &nbsp; &gt; &nbsp; </a>
                </li>
                <li>
                  <a href="#">공지사항</a>
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
                            번호
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
                <div className="order_button">
                  <button
                    onClick={() => {
                      window.location.href = "/notice_write";
                    }}
                  >
                    <i className="icon_select_ck"></i>작성하기
                  </button>
                </div>
              </div>
              <div className="sub_order_card sub_notice_table">
                <ul className="sub_page_num">
                  <li>
                    전체 {this.state.notices.length}건
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
                              noticeservice
                                .deleteNotice(this.state.selects[i].num)
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
                        <th>번호</th>
                        <th>제목</th>
                        <th>글쓴이</th>
                        <th>조회</th>
                        <th>날짜</th>
                      </tr>
                    </thead>
                    {this.search()
                      .slice(
                        (this.state.page - 1) * this.state.limit,
                        (this.state.page - 1) * this.state.limit +
                          this.state.limit
                      )
                      .map((notice) => (
                        <tbody>
                          <tr>
                            <td className="inquity_ck">
                              <label className="check_box">
                                <input
                                  type="checkbox"
                                  id={`${notice.num}`}
                                  checked={
                                    this.state.selects.includes(notice)
                                      ? true
                                      : false
                                  }
                                  onClick={() => {
                                    if (
                                      document.getElementById(`${notice.num}`)
                                        .checked
                                    ) {
                                      const select = this.state.notices.filter(
                                        (select) => select.num === notice.num
                                      );
                                      this.setState((prev) => ({
                                        selects: [...prev.selects, select[0]],
                                      }));
                                    } else {
                                      const cancle = this.state.selects.filter(
                                        (cancle) => cancle.num !== notice.num
                                      );
                                      this.setState({ selects: cancle });
                                    }
                                  }}
                                />
                                <span className="check_box_icon"></span>
                              </label>
                            </td>
                            <td>{notice.num}</td>
                            <td>
                              <span>
                                <a href={`/notice_post?num=${notice.num}`}>
                                  {notice.title}
                                </a>
                              </span>
                            </td>
                            <td>{notice.writer}</td>
                            <td>{notice.hit}</td>
                            <td>
                              {moment(notice.regdate).format(
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
export default notice;
