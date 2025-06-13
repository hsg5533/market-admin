import React from "react";
import Aside from "./Aside";
import Header from "./Header";
import config from "../json/config.json";
import pushservice from "../service/pushservice";

class notice_write extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName1: null,
      fileName2: null,
      tokens: [],
    };
  }

  componentDidMount() {
    pushservice.getToken().then((res) => {
      this.setState({ tokens: res.data });
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
            <form
              id="form"
              action={config.host + "/noticeRegist"}
              method="post"
              encType="multipart/form-data"
              target="iframe"
            >
              <section className="sub_notice sub_notice_write">
                <div className="notice_post_box">
                  <div className="notice_input">
                    <input
                      type="text"
                      name="title"
                      placeholder="제목을 입력해주세요"
                    />
                  </div>
                </div>
                <div className="notice_post_box">
                  <div className="notice_input">
                    <input
                      type="text"
                      name="writer"
                      value={sessionStorage.getItem("id")}
                      placeholder="이름을 입력해주세요"
                      readOnly
                    />
                  </div>
                </div>
                <div className="notice_white_cont">
                  <div>
                    <textarea
                      name="content"
                      placeholder="내용을 입력해주세요."
                    ></textarea>
                  </div>
                </div>
                <ul className="notice_write_file">
                  <li>
                    <p className="write_mark">
                      <input
                        type="text"
                        name="link1"
                        placeholder="사이트 주소를 기입해주세요."
                      />
                    </p>
                  </li>
                  <li>
                    <p>
                      <input
                        type="text"
                        name="link2"
                        placeholder="사이트 주소를 기입해주세요."
                      />
                    </p>
                  </li>
                  <li>
                    <span>첨부 파일</span>
                    <p className="file_btn">
                      <div className="filebox">
                        <input
                          id="upload-name"
                          value={this.state.fileName1}
                          placeholder="첨부파일"
                          readOnly
                        />
                        <label htmlFor="file1">파일찾기</label>
                        <input
                          type="file"
                          id="file1"
                          name="img"
                          accept="image/*"
                          multiple
                          onChange={(event) => {
                            this.setState({ fileName1: event.target.value });
                          }}
                        />
                      </div>
                    </p>
                  </li>
                  <li>
                    <span>첨부파일</span>
                    <p className="file_btn">
                      <div className="filebox">
                        <input
                          id="upload-name"
                          value={this.state.fileName2}
                          placeholder="첨부파일"
                          readOnly
                        />
                        <label htmlFor="file2">파일찾기</label>
                        <input
                          type="file"
                          id="file2"
                          name="img"
                          accept="image/*"
                          multiple
                          onChange={(event) => {
                            this.setState({ fileName2: event.target.value });
                          }}
                        />
                      </div>
                    </p>
                  </li>
                </ul>
                <ul className="notice_btn">
                  <li className="delete_btn">
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        window.location.href = "/notice";
                      }}
                    >
                      취소
                    </button>
                  </li>
                  <li>
                    <div className="white_btn">
                      <button
                        onClick={() => {
                          document.getElementById("form").submit();
                          alert("작성이 완료되었습니다.");
                          this.state.tokens.forEach((token) => {
                            pushservice
                              .sendPushNotification(token.token)
                              .then(() => {
                                window.location.href = "/notice";
                              });
                          });
                        }}
                      >
                        작성 완료
                      </button>
                    </div>
                  </li>
                </ul>
              </section>
            </form>
            <iframe name="iframe" style={{ display: "none" }}></iframe>
          </div>
        </div>
      </main>
    );
  }
}
export default notice_write;
