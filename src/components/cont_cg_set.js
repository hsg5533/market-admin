import React from "react";
import Aside from "./Aside";
import Header from "./Header";
import queryString from "query-string";
import config from "../json/config.json";
import categoryservice from "../service/categoryservice";

class cont_cg_set extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      name: "",
      fileName: "",
    };
  }

  componentDidMount() {
    categoryservice
      .getCategoryDetail(queryString.parse(window.location.search).category)
      .then((res) => {
        this.setState({ code: res.data.code, name: res.data.name });
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
              </ul>
            </div>
            <form
              id="form"
              action={config.host + "/categoryUpdate"}
              method="post"
              encType="multipart/form-data"
              target="iframe"
            >
              <section className="sub_cg_set">
                <div className="cont_menu_box sub_order_item">
                  <h3>카테고리 설정</h3>
                  <div className="cont_menu_list">
                    <ul className="cont_item">
                      <li>순번</li>
                      <li>
                        <input
                          type="text"
                          name="code"
                          value={this.state.code}
                          readOnly
                          onChange={(event) => {
                            this.setState({ code: event.target.value });
                          }}
                        />
                      </li>
                    </ul>
                    <ul className="cont_item">
                      <li>카테고리명</li>
                      <li>
                        <input
                          type="text"
                          name="name"
                          value={this.state.name}
                          onChange={(event) => {
                            this.setState({ name: event.target.value });
                          }}
                        />
                      </li>
                    </ul>
                    <ul className="cont_item">
                      <li>아이콘</li>
                      <li className="cg_checkbox">
                        <p className="file_btn">
                          <div className="filebox">
                            <input
                              id="upload-name"
                              value={this.state.fileName}
                              placeholder="첨부파일"
                              readOnly
                            />
                            <label htmlFor="file">파일찾기</label>
                            <input
                              type="file"
                              id="file"
                              name="imgUpload"
                              accept="image/*"
                              multiple
                              onChange={(event) => {
                                this.setState({ fileName: event.target.value });
                              }}
                            />
                          </div>
                        </p>
                        <p>
                          <i className="icon_main_menu_01"></i>
                          <label className="check_box">
                            <input type="checkbox" />
                            <span className="check_box_icon"></span>
                          </label>
                          <span>삭제</span>
                        </p>
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
                          onClick={(event) => {
                            event.preventDefault();
                            window.location.href = "/cont_category";
                          }}
                        >
                          목록
                        </button>
                      </div>
                      <div className="white_btn">
                        <button
                          onClick={() => {
                            document.getElementById("form").submit();
                            alert("수정되었습니다.");
                            window.location.href = "/cont_category";
                          }}
                        >
                          확인
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>
            </form>
            <iframe name="iframe" style={{ display: "none" }}></iframe>
          </div>
        </div>
      </main>
    );
  }
}
export default cont_cg_set;
