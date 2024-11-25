import React from "react";
import moment from "moment";
import Aside from "./Aside";
import Header from "./Header";
import queryString from "query-string";
import config from "../json/config.json";
import inquiryservice from "../service/inquiryservice";

class ask_post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: queryString.parse(window.location.search).num,
      inquiry: {},
      replies: [],
      regdate: "",
    };
  }

  componentDidMount() {
    inquiryservice.getInquiryDetail(this.state.num).then((res) => {
      this.setState({ inquiry: res.data, regdate: res.data.regdate });
    });
    inquiryservice.getInquiryReply(this.state.num).then((res) => {
      this.setState({ replies: res.data });
    });
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
                커뮤니티 - <span>문의 관리</span>
              </h2>
              <ul>
                <li>
                  <a href="#">홈 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">커뮤니티 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">문의 관리</a>
                </li>
              </ul>
            </div>
            <section className="sub_notice sub_notice_post">
              <div className="notice_post_box">
                <h3>{this.state.inquiry.title}</h3>
                {this.state.inquiry.reply === "y" ? (
                  <p className="complete_label">답변완료</p>
                ) : (
                  <p className="check_label">확인 중</p>
                )}
              </div>
              <ul className="ask_list">
                <li>
                  <span>{this.state.inquiry.writer}</span>
                  <span>
                    {moment(this.state.regdate).format("YYYY-MM-DD HH:mm:ss")}
                  </span>
                </li>
                <li className="common_set">
                  <a href="#">
                    <i className="icon_option_off"></i>
                    <ul>
                      <li>수정</li>
                      <li>삭제</li>
                      <li>복사</li>
                      <li>이동</li>
                    </ul>
                  </a>
                  <a href="#">
                    <i className="icon_option_on"></i>
                    <ul>
                      <li>수정</li>
                      <li>삭제</li>
                      <li>복사</li>
                      <li>이동</li>
                    </ul>
                  </a>
                </li>
              </ul>
              <div className="ask_post_cont">
                <textarea
                  style={{ resize: "none" }}
                  value={this.state.inquiry.content}
                  readOnly
                ></textarea>
                <img
                  style={{ width: "300px", height: "300px" }}
                  src={config.host + `/getInquiryImg/${this.state.inquiry.num}`}
                  onError={(event) => {
                    event.target.style.display = "none";
                  }}
                />
                <div className="ask_txt">
                  답변<span>{this.state.replies.length}</span>
                </div>
              </div>
              <ul className="ask_answer">
                {this.state.replies.map((reply) => (
                  <li>
                    <p>
                      {reply.writer} &nbsp;
                      <span>
                        {moment(reply.regdate).format("YYYY-MM-DD HH:mm:ss")}
                      </span>
                    </p>
                    <span>{reply.content}</span>
                  </li>
                ))}
                <li>
                  <textarea
                    id="content"
                    placeholder="답변 내용을 입력해 주세요."
                  ></textarea>
                </li>
              </ul>
              <ul className="notice_btn">
                <li className="delete_btn">
                  <button
                    onClick={() => {
                      this.props.history.goBack();
                    }}
                  >
                    취소
                  </button>
                </li>
                <li>
                  <div className="list_btn">
                    <button
                      onClick={() => {
                        window.location.href = "/ask";
                      }}
                    >
                      목록
                    </button>
                  </div>
                  <div className="white_btn">
                    <button
                      onClick={() => {
                        inquiryservice
                          .inquiryReply(
                            this.state.num,
                            sessionStorage.getItem("id"),
                            document.getElementById("content").value
                          )
                          .then(() => {
                            alert("등록되었습니다.");
                            window.location.reload();
                          });
                      }}
                    >
                      답변 등록
                    </button>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    );
  }
}
export default ask_post;
