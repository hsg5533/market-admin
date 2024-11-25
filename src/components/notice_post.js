import React from "react";
import moment from "moment";
import Aside from "./Aside";
import Header from "./Header";
import queryString from "query-string";
import config from "../json/config.json";
import noticeservice from "../service/noticeservice";

class notice_post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: queryString.parse(window.location.search).num,
      notice: {},
      regdate: "",
    };
  }

  componentDidMount() {
    noticeservice.hitNotice(this.state.num).then(() => {
      noticeservice.getNoticeDetail(this.state.num).then((res) => {
        this.setState({ notice: res.data, regdate: res.data.regdate });
      });
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
                커뮤니티 - <span>공지사항</span>
              </h2>
              <ul>
                <li>
                  <a href="#">홈 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">커뮤니티 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">공지사항</a>
                </li>
              </ul>
            </div>
            <section className="sub_notice sub_notice_post">
              <div className="notice_post_box">
                <h3>{this.state.notice.title}</h3>
              </div>
              <ul className="notice_list">
                <li>{this.state.notice.writer}</li>
                <li>조회 &nbsp;{this.state.notice.hit}</li>
                <li>
                  {moment(this.state.regdate).format("YYYY-MM-DD HH:mm:ss")}
                </li>
              </ul>
              <div className="notice_post_cont">
                <p>{this.state.notice.content}</p>
                <p>
                  <img
                    style={{ width: "50vh", height: "auto" }}
                    src={config.host + `/getNoticeImg/${this.state.notice.num}`}
                    onError={(event) => {
                      event.target.style.display = "none";
                    }}
                  />
                </p>
              </div>
              <ul className="notice_btn">
                <li className="delete_btn">
                  <button
                    onClick={() => {
                      if (window.confirm("삭제하시겠습니까?")) {
                        noticeservice.deleteNotice(this.state.num).then(() => {
                          alert("삭제되었습니다.");
                          window.location.href = "/notice";
                        });
                      }
                    }}
                  >
                    삭제
                  </button>
                </li>
                <li>
                  <div className="list_btn">
                    <button
                      onClick={() => {
                        window.location.href = "/notice";
                      }}
                    >
                      목록
                    </button>
                  </div>
                  <div className="white_btn">
                    <button
                      onClick={() => {
                        window.location.href = "/notice_write";
                      }}
                    >
                      작성하기
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
export default notice_post;
