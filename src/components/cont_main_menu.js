import React from "react";
import Aside from "./Aside";
import Header from "./Header";
import queryString from "query-string";
import config from "../json/config.json";
import storeservice from "../service/storeservice";

class cont_main_menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      regnumber: queryString.parse(window.location.search).regnumber,
      store: {},
    };
  }

  componentDidMount() {
    storeservice.getStoreReg(this.state.regnumber).then((res) => {
      this.setState({ store: res.data });
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
                컨텐츠 관리 - <span>이벤트/할인</span>
              </h2>
              <ul>
                <li>
                  <a href="#">홈 &nbsp; &gt; &nbsp;</a>
                </li>
                <li>
                  <a href="#">컨텐츠 관리 &nbsp; &gt; &nbsp; </a>
                </li>
                <li>
                  <a href="#">이벤트/할인</a>
                </li>
              </ul>
            </div>
            <section className="sub_cont_menu">
              <div className="cont_menu_box">
                <div className="cont_menu_list">
                  <ul className="cont_item">
                    <li>아이디</li>
                    <li>{this.state.store.regnumber}</li>
                  </ul>
                  <ul className="cont_item">
                    <li>가맹점명</li>
                    <li>{this.state.store.name}</li>
                  </ul>
                  <ul className="cont_item">
                    <li>제목</li>
                    <li className="sub_cont_event">
                      {this.state.store.explan || "-"}
                    </li>
                  </ul>
                  <ul className="cont_item">
                    <li>제목 확인</li>
                    <li>&nbsp;</li>
                  </ul>
                  <ul className="cont_item">
                    <li>내용</li>
                    <li className="sub_cont_txt">
                      {this.state.store.introduce || "-"}
                    </li>
                  </ul>
                  <ul className="cont_item">
                    <li>내용 확인</li>
                    <li>&nbsp;</li>
                  </ul>
                  <ul className="cont_item">
                    <li>이미지</li>
                    <li>
                      <img
                        style={{ width: 500, height: 500 }}
                        src={
                          config.host +
                          `/getStoreImg/${this.state.store.regnumber}`
                        }
                        onError={(event) => {
                          event.target.src = require("../resource/img/icon/no_img.png");
                        }}
                      />
                    </li>
                  </ul>
                  <ul className="cont_item">
                    <li>등록일</li>
                    <li>22-09-27 15:45:11</li>
                  </ul>
                  <ul className="cont_item">
                    <li>수정일</li>
                    <li>22-09-28 11:21:54</li>
                  </ul>
                  <ul className="cont_item">
                    <li>관리자 댓글</li>
                    <li className="cont_comment">
                      <div>
                        <textarea
                          type="text"
                          placeholder="댓글을 작성해주세요."
                        ></textarea>
                      </div>
                    </li>
                  </ul>
                  <ul className="cont_item">
                    <li>승인처리</li>
                    <li>
                      <div className="cont_option">
                        <div className="search_option_box">
                          <div className="search_select">
                            <a href="#">Y</a>
                          </div>
                          <ul className="search_option">
                            <li>
                              <a href="#">Y</a>
                            </li>
                            <li>
                              <a href="#">N</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <span>승인 시간 22-09-29 15:12:03</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <ul className="notice_btn">
                  <li className="delete_btn">
                    <button>취소</button>
                  </li>
                  <li>
                    <div className="list_btn">
                      <button
                        onClick={() => {
                          window.location.href = "/cont_main";
                        }}
                      >
                        목록
                      </button>
                    </div>
                    <div className="white_btn">
                      <button
                        onClick={() => {
                          window.location.href = "/cont_main";
                        }}
                      >
                        확인
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
    );
  }
}
export default cont_main_menu;
